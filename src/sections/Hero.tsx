import React, { useState, useEffect } from "react";
import { useStaticQuery, graphql } from "gatsby";

import {
  StyledHero,
  StyledWaterMarkLeft,
  StyledWaterMarkRight,
  StyledHeroContent,
  StyledHeroHeader,
  StyledHeroCtaWrapper,
  StyledHeroCtaDownloadButton,
  StyledHeroCtaGithubLink,
} from "styles";
import { MarkDownProps, FluidImageProps } from "types";

import { SVG } from "components";
import { detectOS, OSTypes } from "utils";
import { WINDOWS_INSTALLER, MAC_INSTALLER } from "configurations";

type QueryProps = MarkDownProps & {
  previewImageLight: FluidImageProps;
  previewImageDark: FluidImageProps;
};

const Hero: React.FC = () => {
  const { allMarkdownRemark } = useStaticQuery<QueryProps>(graphql`
    {
      allMarkdownRemark: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/hero/" } }
      ) {
        edges {
          node {
            frontmatter {
              title
              subTitle
            }
          }
        }
      }
    }
  `);

  const { frontmatter } = allMarkdownRemark.edges[0].node;

  const [operatingSystem, setOperatingSystem] = useState<OSTypes>("Mobile");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setOperatingSystem(detectOS());
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

  const renderDownloadButton = () => {
    switch (operatingSystem) {
      case "Windows":
        return (
          <StyledHeroCtaDownloadButton as={"a"} href={WINDOWS_INSTALLER}>
            <SVG name="windows" />
            Download for Windows
          </StyledHeroCtaDownloadButton>
        );
      case "MacOS":
        return (
          <StyledHeroCtaDownloadButton as={"a"} href={MAC_INSTALLER}>
            <SVG name="apple" />
            Download for Mac OS
          </StyledHeroCtaDownloadButton>
        );
      case "Linux":
        return (
          <StyledHeroCtaDownloadButton as={"a"} href="#download-now">
            <SVG name="tux" />
            Download for Linux OS
          </StyledHeroCtaDownloadButton>
        );
      default:
        return (
          <StyledHeroCtaDownloadButton as={"a"} href="#download-now">
            <SVG name="download" />
            Download Installer
          </StyledHeroCtaDownloadButton>
        );
    }
  };

  return (
    <StyledHero>
      <StyledWaterMarkLeft />
      <StyledWaterMarkRight />

      <StyledHeroContent>
        <StyledHeroHeader>
          <h1>{frontmatter.title}</h1>
          <p>{frontmatter.subTitle}</p>
        </StyledHeroHeader>

        <StyledHeroCtaWrapper>
          {renderDownloadButton()}
          <StyledHeroCtaGithubLink
            as={"a"}
            href="https://github.com/roldanjrCodeArts9711/productivity-timer"
          >
            <SVG name="github" />
            View on Github
          </StyledHeroCtaGithubLink>
        </StyledHeroCtaWrapper>
      </StyledHeroContent>
    </StyledHero>
  );
};

export default Hero;
