import React from "react";
import { StyledLayout } from "styles";
import { ThemeProvider } from "contexts";

import Navigation from "./Navigation";
import Footer from "./Footer";

const Layout: React.FC = ({ children }) => {
  return (
    <ThemeProvider>
      <StyledLayout>
        <Navigation />

        <main>{children}</main>

        <Footer />
      </StyledLayout>
    </ThemeProvider>
  );
};

export default Layout;
