import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Error from "./pages/Error";
import Register from "./pages/Register";
import Dashboard from "./dashboard/Dashboard";
// import Todo from "./features/todo/Todo";

const App: React.FC = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      errorElement: <Error />,
    },
    {
      path: "register",
      element: <Register />,
      errorElement: <Error />,
    },
    {
      path: "dashboard",
      element: <Dashboard />,
      errorElement: <Error />,
    },
    // {
    //   path: "todo",
    //   element: <Todo />,
    //   errorElement: <Error />,
    // },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
