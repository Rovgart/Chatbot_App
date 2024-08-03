import { JWTPayload, jwtVerify, SignJWT } from "jose";

const alg = process.env.ALGORYTHM;
const SECRET_KEY = process.env.SECRET_KEY;
const key = new TextEncoder().encode(SECRET_KEY);
if (!key) {
  throw new Error("SECRET_KEY is not set");
}
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
