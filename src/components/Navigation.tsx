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
import { SVG } from "components";

import Logo from "./Logo";

type LogoProps = {
  childImageSharp: {
    fixed: FixedObject | FixedObject[] | undefined;
  };
};

type QueryProps = {
  siteName: {
    siteMetadata: {
      title: string;
    };
  };
  siteLogoLight: LogoProps;
  siteLogoDark: LogoProps;
};

const Navigation: React.FC = () => {
  const { siteName, siteLogoLight, siteLogoDark } = useStaticQuery<
    QueryProps
  >(graphql`
    {
      siteName: site {
        siteMetadata {
          title
        }
      }
      siteLogoLight: file(relativePath: { eq: "logo-light.png" }) {
        childImageSharp {
          fixed(width: 28) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      siteLogoDark: file(relativePath: { eq: "logo-dark.png" }) {
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
        src={
          isDarkMode
            ? siteLogoDark.childImageSharp.fixed
            : siteLogoLight.childImageSharp.fixed
        }
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
