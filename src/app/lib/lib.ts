import { Collection, Db } from "mongodb";
import bcrypt, { compare } from "bcrypt";
import clientPromise from "../lib/mongodb";
import { JWTPayload, jwtVerify, KeyLike, SignJWT } from "jose";
import { cookies } from "next/headers";
let db: Db;
let client;
let users: Collection;
const alg = process.env.ALGORYTHM;
const key = process.env.SECRET_KEY;

export const connect = async () => {
  if (db) return;
  try {
    client = await clientPromise;
    db = client.db("ChatbotUI");
    users = db.collection("users");
  } catch (error: any) {
    console.error(error?.message);
  }
};
export const registerUserToDb = async (formData: FormData) => {
  try {
    await connect();
    const user = {
      email: formData.get("email"),
      password: formData.get("password"),
    };
    const { email, password } = user;
    if (!email || !password) {
      throw new Error("Email or password are required ! ");
    }
    const existingUser = await users.findOne({ email: email });

    if (existingUser) throw new Error("User already exists");

    const createdUser = {
      email: email,
      password: await bcrypt.hash(password as string, 12),
      createdAt: new Date(Date.now()),
    };
    const insertedUser = await users.insertOne({
      email: createdUser.email,
      password: createdUser.password,
    });
    if (insertedUser) {
      console.log("User successfully created");
      return true;
    }
  } catch (error: any) {
    console.error(error?.message);
  }
};

const encryptJWT = async (Payload: JWTPayload) => {
  const encrypted = await new SignJWT(Payload)
    .setExpirationTime("10 secs from now")
    .setProtectedHeader({ alg: alg as string })
    .setIssuedAt()
    .sign(key);

  return encrypted;
};

const decryptJWT = async (input: string) => {
  const options = {
    algorithms: ["HS256"],
  };
  const { payload } = await jwtVerify(input, key, options);
  return payload;
};

export const login = async (formData: FormData) => {
  const user = {
    email: formData.get("email"),
    password: formData.get("password"),
  };
  const userInDb = await users.findOne({ email: user.email });

  if (user && compare(user.email, userInDb)) {
    // Create session
    const { email } = user;
    const expires = new Date(Date.now() + 10 * 1000);
    const session = await encryptJWT({ email, expires });

    cookies().set("session", session, { expires: expires, httpOnly: true });
    return { token: session, user: user };
  }
};

const getSession = () => {
  const session = cookies().get("session");
  if (!session) return null;

  // return decryptJWT()
};
