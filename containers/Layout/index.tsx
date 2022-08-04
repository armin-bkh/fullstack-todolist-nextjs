import Footer from "@/containers/Layout/components/Footer";
import Header from "@/containers/Layout/components/Header";
import React from "react";

type LayoutProps = {
  children: JSX.Element | JSX.Element[];
};

function Layout(props: LayoutProps) {
  const { children } = props;

  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

export default Layout;
