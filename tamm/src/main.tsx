import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root.tsx";
import ErrorPage from "./pages/ErrorPage.tsx";
import ServicesPage from "./pages/ServicesPage.tsx";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />, // Handles errors in Root route
    children: [
      {
        path: "services",
        element: <ServicesPage />,
        errorElement: <ErrorPage />, // Handles errors in Services route
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
