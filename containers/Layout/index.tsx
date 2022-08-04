import React from "react";

import Header from "@/containers/Layout/components/Header";

type LayoutProps = {
  children: JSX.Element | JSX.Element[];
};

function Layout(props: LayoutProps) {
  const { children } = props;

  return (
    <>
      <Header />
      {children}
    </>
  );
}

export default Layout;
