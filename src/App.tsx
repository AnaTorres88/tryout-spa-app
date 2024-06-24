import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import RootLayout from './shared/RootLayout';
import Home from './components/Home/Home';
import Users from "./components/Users/Users";
import ErrorPage from './shared/Error';
import UserDetail from "./components/Users/UserDetail/UserDetail";
import NewsDetail from "./components/News/NewsDetail/NewsDetail";
import { userDetailLoader, usersLoader, newsDetailLoader } from './core/loader/loaders';
import './i18n'; 
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage errorNumber={404} text="Page Not found!!" />,
    children: [
      { index: true, path: "/", element: <Home/>},
      { path: "/users", element: <Users/>, loader: usersLoader},
      { path: "news/:newsId", element: <NewsDetail />, loader: newsDetailLoader},
      { path: "users/:userId", element: <UserDetail />, loader: userDetailLoader},
    ],
  },
]);

function App() {
  return (
    <>
        <RouterProvider router={router} />
    </>
  )
}

export default App
