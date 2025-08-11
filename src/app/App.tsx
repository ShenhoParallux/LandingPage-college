import { Navigate, Route, Routes } from "react-router-dom";
import { LandingPage } from "@/pages";
import { Layout } from "@/app/Layout";
import "./App.scss";
import "@/shared/styles/main.scss";

export const App = () => {
  return (
    <Routes>
      <Route path={"/"} element={<Layout />}>
        <Route index element={<LandingPage />} />
        <Route path={"*"} element={<Navigate to={"/"} replace={true} />} />
      </Route>
    </Routes>
  );
};
