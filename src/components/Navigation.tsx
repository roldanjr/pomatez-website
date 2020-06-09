import React, { useContext } from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import { FixedObject } from "gatsby-image";

import {
  StyledNav,
  StyledNavLinks,
  StyledButtonPrimary,
  StyledNavThemeToggler,
  StyledNavButtonWrapper,
} from "styles";
import { navLinks } from "configurations";
import { ThemeContext } from "contexts";
import { FixedImageProps } from "types";
import { SVG } from "components";

import Logo from "./Logo";

type QueryProps = {
  siteName: {
    siteMetadata: {
      title: string;
    };
  };
  siteLogo: FixedImageProps;
};

const Navigation: React.FC = () => {
  const { siteName, siteLogo } = useStaticQuery<QueryProps>(graphql`
    {
      siteName: site {
        siteMetadata {
          title
        }
      }
      siteLogo: file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fixed(width: 28) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  const { isDarkMode, themeToggler } = useContext(ThemeContext);

  return (
    <StyledNav>
      <Logo
        src={siteLogo.childImageSharp.fixed}
        name={siteName.siteMetadata.title}
      />
      <StyledNavLinks>
        {navLinks.map((nav, index) => (
          <li key={index}>
            <Link to={nav.link}>{nav.label}</Link>
          </li>
        ))}
      </StyledNavLinks>

      <StyledNavButtonWrapper>
        <StyledNavThemeToggler onClick={themeToggler}>
          Toggle Theme
          <SVG name={isDarkMode ? "moon" : "sunny"} />
        </StyledNavThemeToggler>

        <StyledButtonPrimary>
          <SVG name="download" />
          Download Now
        </StyledButtonPrimary>
      </StyledNavButtonWrapper>
    </StyledNav>
  );
};

export default React.memo(Navigation);
