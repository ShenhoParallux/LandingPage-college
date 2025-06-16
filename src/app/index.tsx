import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "@/shared/ui/layout";
import { LandingPage } from "@/pages";

export const App = () => {
  return (
    <BrowserRouter basename="/LandingPage-college/">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<LandingPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
