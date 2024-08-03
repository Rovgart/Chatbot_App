import { Collection, Db } from "mongodb";
import bcrypt, { compare } from "bcrypt";
import clientPromise from "../lib/mongodb";
import { JWTPayload, jwtVerify, KeyLike, SignJWT } from "jose";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { sign } from "crypto";
import { createSession } from "../session";
import Groq from "groq-sdk";
let db: Db;
let client;
let users: Collection;
const alg = process.env.ALGORYTHM;
const SECRET_KEY = process.env.SECRET_KEY;
const key = new TextEncoder().encode(SECRET_KEY);
if (!key) {
  throw new Error("SECRET_KEY is not set");
}

export const connect = async () => {
  if (db && users) return;
  try {
    client = await clientPromise;
    db = client.db("ChatbotUI");
    users = db.collection("users");
  } catch (error: any) {
    console.error(`Databse error connection: ${error?.message}`);
  }
};
export const registerUserToDb = async (user: {
  username: string;
  email: string;
  password: string;
  repeatedPassword: string;
  agreeTerms: boolean;
}) => {
  try {
    await connect();
    const { username, email, password, repeatedPassword, agreeTerms } = user;
    if (!username || !email || !password) {
      throw new Error("Email or password are required ! ");
    }
    const existingUser = await users.findOne({
      email: email.trim().toLowerCase(),
    });

    if (existingUser) throw new Error("User already exists");
    if (password.trim() !== repeatedPassword.trim()) {
      throw new Error("Passwords not match");
    }
    if (agreeTerms === null) {
      throw new Error("Terms and conditions hasn't been accepted");
    }
    const hashedPassword = await bcrypt.hash(password, 12);
    const createdUser = {
      username: username,
      email: email,
      password: hashedPassword,
      createdAt: new Date(Date.now()),
    };
    const insertedUser = await users.insertOne(createdUser);
    if (insertedUser.insertedId) {
      console.log("User successfully created");
      return true;
    } else {
      throw new Error("User registration failed");
    }
  } catch (error: any) {
    console.error("Registration error:", error?.message || error);
    throw new Error(
      error?.message || "An unexpected error occurred during registration."
    );
  }
};

export const encryptJWT = async (Payload: JWTPayload) => {
  const encrypted = await new SignJWT(Payload)
    .setExpirationTime("10 secs from now")
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .sign(key);

  return encrypted;
};

export const decryptJWT = async (input: string) => {
  const options = {
    algorithms: ["HS256"],
  };
  const { payload } = await jwtVerify(input, key, options);
  return payload;
};

export const login = async (user: { email: string; password: string }) => {
  await connect();
  const { email, password } = user;
  console.log(email, password);
  const userInDb = await users.findOne({ email: user.email });
  if (!userInDb) {
    return null;
  }
  console.log(userInDb.password);
  if (userInDb && (await compare(password, userInDb.password))) {
    // Create session
    const { email } = user;
    console.log(email);
    const createdSession = await createSession(email);
    console.log(createdSession);
    return { access_token: createdSession };
  }
};
export const logout = async () => {
  cookies().delete(cookie.name);
  return redirect("/login");
};
export async function main(message: string) {
  const groq = new Groq({
    apiKey: "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",
  });
  try {
    const completion = await groq.chat.completions.create({
      messages: [
        {
          role: "user",
          content: message,
        },
      ],
      model: "llama3-70b-8192",
    });
    const chatResult = (await completion.choices[0]?.message?.content) || "";
    console.log(chatResult);
    return chatResult;
  } catch (error: any) {
    console.error(error?.message);
  }
}
