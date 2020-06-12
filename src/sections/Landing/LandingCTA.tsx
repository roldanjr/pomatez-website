import React, { useState, useEffect } from "react";
import { useStaticQuery, graphql } from "gatsby";
import {
  StyledLandingCtaDownloadButton,
  StyledLandingHeader,
  StyledLandingCtaWrapper,
  StyledLandingCtaGithubLink,
} from "styles";
import { WINDOWS_INSTALLER, MAC_INSTALLER } from "configurations";
import { OSTypes, detectOS } from "utils";
import { MarkDownProps } from "types";
import { SVG } from "components";

const LandingCTA: React.FC = () => {
  const { allMarkdownRemark } = useStaticQuery<MarkDownProps>(graphql`
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
          <StyledLandingCtaDownloadButton as={"a"} href={WINDOWS_INSTALLER}>
            <SVG name="windows" />
            Download for Windows
          </StyledLandingCtaDownloadButton>
        );
      case "MacOS":
        return (
          <StyledLandingCtaDownloadButton as={"a"} href={MAC_INSTALLER}>
            <SVG name="apple" />
            Download for Mac OS
          </StyledLandingCtaDownloadButton>
        );
      case "Linux":
        return (
          <StyledLandingCtaDownloadButton
            href="/"
            to="download-now"
            offset={-24}
            duration={420}
            smooth
          >
            <SVG name="tux" />
            Download for Linux OS
          </StyledLandingCtaDownloadButton>
        );
      default:
        return (
          <StyledLandingCtaDownloadButton
            href="/"
            to="download-now"
            offset={-24}
            duration={420}
            smooth
          >
            <SVG name="download" />
            Download Installer
          </StyledLandingCtaDownloadButton>
        );
    }
  };

  return (
    <React.Fragment>
      <StyledLandingHeader>
        <h1>{frontmatter.title}</h1>
        <p>{frontmatter.subTitle}</p>
      </StyledLandingHeader>

      <StyledLandingCtaWrapper>
        {renderDownloadButton()}
        <StyledLandingCtaGithubLink
          as={"a"}
          href="https://github.com/roldanjrCodeArts9711/productivity-timer"
        >
          <SVG name="github" />
          View on Github
        </StyledLandingCtaGithubLink>
      </StyledLandingCtaWrapper>
    </React.Fragment>
  );
};

export default React.memo(LandingCTA);
