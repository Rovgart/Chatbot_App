import { MongoClient, ServerApiVersion } from "mongodb";
import { Collection, Db } from "mongodb";
import bcrypt, { compare } from "bcrypt";
import { createSession } from "../session";
let db: Db;
let users: Collection;
if (!process.env.MONGODB_URI) {
  throw new Error('Invalid/Missing environment variable: "MONGODB_URI"');
}

const uri = process.env.MONGODB_URI;
const options = {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
};

let client;
let clientPromise: Promise<MongoClient>;
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
if (process.env.NODE_ENV === "development") {
  // In development mode, use a global variable so that the value
  // is preserved across module reloads caused by HMR (Hot Module Replacement).
  let globalWithMongo = global as typeof globalThis & {
    _mongoClientPromise?: Promise<MongoClient>;
  };

  if (!globalWithMongo._mongoClientPromise) {
    client = new MongoClient(uri, options);
    globalWithMongo._mongoClientPromise = client.connect();
  }
  clientPromise = globalWithMongo._mongoClientPromise;
} else {
  // In production mode, it's best to not use a global variable.
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

// Export a module-scoped MongoClient promise. By doing this in a
// separate module, the client can be shared across functions.
export default clientPromise;

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
