"use client";
import axios from "axios";
import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useLayoutEffect,
  useState,
} from "react";
import { IoMdReturnLeft } from "react-icons/io";
type AuthContextType = {
  token: string | null;
  setToken: React.Dispatch<React.SetStateAction<string | null>>;
};
const AuthContext = createContext<AuthContextType | undefined>(undefined);
function AuthProvider({ children }: { children: ReactNode }) {
  // Storing access_token in state more secure than storing in localStorage and cookies
  const [token, setToken] = useState<string | null>(null);
  useEffect(() => {
    const fetchMe = async () => {
      try {
        const response = await fetch("http://localhost/api/get_me");
        if (!response.ok) {
          throw new Error(`Error: ${response.status}: ${response.statusText}`);
        }

        const data = await response.json();
        if (data) {
          return data;
        }
      } catch (error: any) {
        console.error(error?.message);
      }
    };
    fetchMe();
  }, []);
  useLayoutEffect(() => {
    // This function receives the configuration of each request before it is sent
    const authInterceptor = axios.interceptors.request.use((config) => {
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    });
    (error: any) => {
      return Promise.reject(error);
    };
    return () => {
      axios.interceptors.request.eject(authInterceptor);
    };
  }, [token]);
  return (
    <AuthContext.Provider value={{ token, setToken }}>
      {children}
    </AuthContext.Provider>
  );
}
export const useAuth = () => {
  const authCtx = useContext(AuthContext);
  if (!authCtx) throw new Error("Outside of Provider");
  return authCtx;
};
export default AuthProvider;
