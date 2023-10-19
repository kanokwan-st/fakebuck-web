import { createContext, useState } from "react";

import * as authApi from "../apis/auth-api";
import { getAccessToken, removeAcessToken, setAccessToken } from "../utils/local-storage";

export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  const [authenticatedUser, setAuthenticatedUser] = useState(
    getAccessToken() ? true : null
  ); //state เก็บข้อมูลผู้ใช้งานที่มีการ login อยู่

  const login = async (emailOrMobile, password) => {
    const res = await authApi.login({ emailOrMobile, password });
    setAccessToken(res.data.accessToken);
    setAuthenticatedUser(true);
  };

  const logout = () => {
    removeAcessToken();
    setAuthenticatedUser(null);
  }

  return (
    <AuthContext.Provider value={{ authenticatedUser, login, logout }}>{children}</AuthContext.Provider>
  );
}
