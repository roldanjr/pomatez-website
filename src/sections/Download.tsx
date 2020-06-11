import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import {
  StyledDownload,
  StyledDownloadContent,
  StyledDownloadForWindows,
  StyledDownloadForLinux,
  StyledDownloadForMac,
  StyledDownloadOSLogo,
  StyledButtonPrimary,
  StyledLinuxInstallerWrapper,
} from "styles";
import { MarkDownProps } from "types";
import { Header, SVG } from "components";

const Download: React.FC = () => {
  const { allMarkdownRemark } = useStaticQuery<MarkDownProps>(graphql`
    {
      allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/download/" } }) {
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

  return (
    <StyledDownload>
      <Header frontMatter={frontmatter} />

      <StyledDownloadContent>
        <StyledDownloadForWindows>
          <StyledDownloadOSLogo>
            <SVG name="windows" />
          </StyledDownloadOSLogo>

          <StyledButtonPrimary>
            <SVG name="download" />
            Windows 7, 8 and 10
          </StyledButtonPrimary>
        </StyledDownloadForWindows>

        <StyledDownloadForLinux>
          <StyledDownloadOSLogo>
            <SVG name="linux" />
          </StyledDownloadOSLogo>

          <StyledLinuxInstallerWrapper>
            <StyledButtonPrimary>
              <SVG name="download" />
              .deb
            </StyledButtonPrimary>
            <StyledButtonPrimary>
              <SVG name="download" />
              .AppImage
            </StyledButtonPrimary>
            <StyledButtonPrimary>
              <SVG name="download" />
              .rpm
            </StyledButtonPrimary>

            <span>Or</span>

            <StyledButtonPrimary id="snap-store-btn">
              <SVG name="snap-store" />
            </StyledButtonPrimary>
          </StyledLinuxInstallerWrapper>
        </StyledDownloadForLinux>

        <StyledDownloadForMac>
          <StyledDownloadOSLogo>
            <SVG name="apple" />
          </StyledDownloadOSLogo>

          <StyledButtonPrimary>
            <SVG name="download" />
            Mac OS 10.10+
          </StyledButtonPrimary>
        </StyledDownloadForMac>
      </StyledDownloadContent>
    </StyledDownload>
  );
};

export default Download;
