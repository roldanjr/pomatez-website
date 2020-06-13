import React, { useContext } from "react";
import { useStaticQuery, graphql } from "gatsby";

import {
  StyledNav,
  StyledNavLinks,
  StyledNavThemeToggler,
  StyledNavButtonWrapper,
  StyledNavLinkAnchor,
  StyledNavDownloadButton,
  StyledNavContent,
  StyledNavAsideWrapper,
  StyledNavMenu,
} from "styles";
import { ThemeContext } from "contexts";
import { navLinks } from "configurations";
import { FluidImageProps } from "types";
import { SVG } from "components";

import Logo from "./Logo";

type QueryProps = {
  siteName: {
    siteMetadata: {
      title: string;
    };
  };
  siteLogoLight: FluidImageProps;
  siteLogoDark: FluidImageProps;
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
          fluid(maxWidth: 28, quality: 100) {
            ...GatsbyImageSharpFluid
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
      siteLogoDark: file(relativePath: { eq: "logo-dark.png" }) {
        childImageSharp {
          fluid(maxWidth: 28, quality: 100) {
            ...GatsbyImageSharpFluid
            ...GatsbyImageSharpFluidLimitPresentationSize
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
      <StyledNavContent>
        <Logo
          src={
            isDarkMode
              ? siteLogoDark.childImageSharp.fluid
              : siteLogoLight.childImageSharp.fluid
          }
          name={siteName.siteMetadata.title}
        />

        <StyledNavAsideWrapper>
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
        </StyledNavAsideWrapper>

        <StyledNavMenu>
          <span>&nbsp;</span>
          <span>&nbsp;</span>
          <span>&nbsp;</span>
        </StyledNavMenu>
      </StyledNavContent>
    </StyledNav>
  );
};

export default React.memo(Navigation);
