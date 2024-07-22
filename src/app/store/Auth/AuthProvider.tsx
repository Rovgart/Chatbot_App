"use client";
import axios from "axios";
import React, {
  createContext,
  ReactNode,
  useEffect,
  useLayoutEffect,
  useState,
} from "react";
type Props = {};
const AuthContext = createContext(undefined);
function AuthProvider({ children }: { children: ReactNode }) {
  // Storing access_token in state more secure than storing in localStorage and cookies
  const [token, setToken] = useState<{ token: string }>();
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
    <AuthContext.Provider value={{ token }}>{children}</AuthContext.Provider>
  );
}

export default AuthProvider;
