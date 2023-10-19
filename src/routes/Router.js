import { RouterProvider, createBrowserRouter } from "react-router-dom";
import FriendPage from "../pages/FriendPage";
import LoginPage from "../pages/LoginPage";
import PostPage from "../pages/PostPage";
import ProfilePage from "../pages/ProfilePage";
import RedirectIfAuthenticate from "../features/auth/RedirectIfAuthenticate";
import ProtectedRoute from "../features/auth/ProtectedRoute";
import AuthLayout from "../layouts/AuthLayout";

const router = createBrowserRouter([
  {
    path: "/login",
    element: (
      <RedirectIfAuthenticate>
        <LoginPage />
      </RedirectIfAuthenticate>
    ),
  },

  //path  อื่นๆที่ไม่ใช่ /login ให้มาเข้าAuthLayout
  {
    element: (
      <ProtectedRoute>
        <AuthLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        path: "/",
        element: <PostPage />,
      },
      {
        path: "/friend",
        element: <FriendPage />,
      },
      {
        path: "/profile",
        element: <ProfilePage />,
      },
    ],
  },
  {
    path: '/test',
    element: <h1>Test</h1>
  }
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
