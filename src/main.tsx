import { createRoot } from "react-dom/client";
import { App } from "@/app";
import "@/shared/styles/main.scss";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter basename={import.meta.env.BASE_URL}>
    <App />
  </BrowserRouter>,
);
