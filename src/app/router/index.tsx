import { createBrowserRouter } from "react-router-dom";
import { LandingPage } from "@/pages";
import { Layout } from "@/shared/ui/layout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <LandingPage />,
      },
    ],
  },
]);
