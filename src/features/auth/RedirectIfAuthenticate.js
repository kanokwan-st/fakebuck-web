import { Navigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

export default function RedirectIfAuthenticate({ children }) {
  const { authenticatedUser } = useAuth();
  //ถ้ามี user log in อยู่ให้ไปที่ /
  if (authenticatedUser) {
    return <Navigate to={"/"} />;
  }
  return children;
}
