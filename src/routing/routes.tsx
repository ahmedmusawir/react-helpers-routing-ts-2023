import { createBrowserRouter } from "react-router-dom";
import ContactPage from "./ContactPage";
import ErrorPage from "./ErrorPage";
import HomePage from "./HomePage";
import Layout from "./Layout";
import LoginPage from "./LoginPage";
import PrivatePage from "./PrivatePage";
import PrivateRoutes from "./PrivateRoutes";
import UserDetailPage from "./UserDetailPage";
import UserDetails from "./UserDetails";
import UserListPage from "./UserListPage";
import UsersPage from "./UsersPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "login", element: <LoginPage /> },
      { path: "users", element: <UserListPage /> },
      { path: "users/:id", element: <UserDetailPage /> },
      {
        path: "users-cols",
        element: <UsersPage />,
        children: [{ path: ":id", element: <UserDetails /> }],
      },
      { path: "contact", element: <ContactPage /> },
    ],
  },
  {
    element: <PrivateRoutes />,
    children: [{ path: "private", element: <PrivatePage /> }],
  },
]);

export default router;
