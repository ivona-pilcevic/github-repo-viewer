import React from "react";
import { LayoutContainer, Header, Main, Footer } from "./style";

const Layout: React.FC<{ children: any }> = ({ children }) => {
  return (
    <LayoutContainer>
      <Header>
        <h1>GitHub Repo Viewer</h1>
      </Header>
      <Main>{children}</Main>
      <Footer>© 2024 GitHub Repo Viewer</Footer>
    </LayoutContainer>
  );
};

export default Layout;
