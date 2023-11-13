import { RouterProvider, createBrowserRouter } from "react-router-dom";
import FriendPage from "../pages/FriendPage";
import LoginPage from "../pages/LoginPage";
import PostPage from "../pages/PostPage";
import ProfilePage from "../pages/ProfilePage";
import RedirectIfAuthenticate from "../features/auth/RedirectIfAuthenticate";
import ProtectedRoute from "../features/auth/ProtectedRoute";
import AuthLayout from "../layouts/AuthLayout";
import FriendSuggestPage from "../pages/FriendSuggestPage";
import AllFriendPage from "../pages/AllFriendPage";

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
        path: "/friend/suggestion",
        element: <FriendSuggestPage />
      },
      {
        path: "/friend/allfriend",
        element: <AllFriendPage />
      },
      {
        path: "/profile/:userId",
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
