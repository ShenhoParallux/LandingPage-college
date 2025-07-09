import React from "react";
import { Outlet } from "react-router-dom";
import { Footer, Header } from "@/widgets/ui";

const Layout = () => {
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

export default Layout;
