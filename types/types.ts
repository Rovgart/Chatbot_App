export type User = {
  email: string;
  password: string;
};
export type Session = {
  access_token: string;
  exp: Date;
};
export type SignUpResult = () => Promise<Session | undefined>;
