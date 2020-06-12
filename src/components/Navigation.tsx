import React, { useContext } from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Link } from "react-scroll";

import {
  StyledNav,
  StyledNavLinks,
  StyledButtonPrimary,
  StyledNavThemeToggler,
  StyledNavButtonWrapper,
  StyledNavLinkAnchor,
  StyledNavDownloadButton,
} from "styles";
import { ThemeContext } from "contexts";
import { navLinks } from "configurations";
import { FixedImageProps } from "types";
import { SVG } from "components";

import Logo from "./Logo";

type QueryProps = {
  siteName: {
    siteMetadata: {
      title: string;
    };
  };
  siteLogoLight: FixedImageProps;
  siteLogoDark: FixedImageProps;
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

  const renderNavLinks = () => {
    return navLinks.map((nav, index) => {
      if (nav.offset) {
        return (
          <li key={index}>
            <StyledNavLinkAnchor
              href="/"
              to={nav.link}
              activeClass="active"
              offset={nav.offset}
              duration={420}
              smooth
              spy
            >
              {nav.label}
            </StyledNavLinkAnchor>
          </li>
        );
      }
      return (
        <li key={index}>
          <a href={nav.link}>{nav.label}</a>
        </li>
      );
    });
  };

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
      <StyledNavLinks>{renderNavLinks()}</StyledNavLinks>

      <StyledNavButtonWrapper>
        <StyledNavThemeToggler onClick={themeToggler}>
          Toggle Theme
          <SVG name={isDarkMode ? "moon" : "sunny"} />
        </StyledNavThemeToggler>

        <StyledNavDownloadButton
          href="/"
          to="download-now"
          offset={-24}
          duration={420}
          smooth
        >
          <SVG name="download" />
          Download Now
        </StyledNavDownloadButton>
      </StyledNavButtonWrapper>
    </StyledNav>
  );
};

export default React.memo(Navigation);
