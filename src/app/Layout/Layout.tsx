import React from "react";
import { Outlet } from "react-router-dom";
import { Footer, Header } from "@/widgets/ui";

export const Layout = () => {
  return (
    <React.Fragment>
      <Header />
      <main className={"main"}>
        <Outlet />
      </main>
      <Footer />
    </React.Fragment>
  );
};
