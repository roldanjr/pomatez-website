import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import LazyLoad from "react-lazyload";
import {
  StyledDownload,
  StyledDownloadButtonWrapper,
  StyledDownloadForWindows,
  StyledDownloadForLinux,
  StyledDownloadForMac,
  StyledDownloadOSLogo,
  StyledDownloadButton,
  StyledLinuxInstallerWrapper,
  StyledDownloadContent,
} from "styles";
import { MarkDownProps } from "types";
import { Header, SVG, Preloader } from "components";
import {
  WINDOWS_INSTALLER,
  DEB_INSTALLER,
  APP_IMAGE_INSTALLER,
  RPM_INSTALLER,
  MAC_INSTALLER,
} from "configurations";

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
    <StyledDownload id="download-now">
      <LazyLoad
        once={true}
        offset={80}
        height="800px"
        placeholder={<Preloader />}
      >
        <StyledDownloadContent>
          <Header frontMatter={frontmatter} />

          <StyledDownloadButtonWrapper>
            <StyledDownloadForWindows>
              <StyledDownloadOSLogo>
                <SVG name="windows" />
              </StyledDownloadOSLogo>

              <StyledDownloadButton as={"a"} href={WINDOWS_INSTALLER}>
                <SVG name="download" />
                Windows 7, 8 and 10
              </StyledDownloadButton>
            </StyledDownloadForWindows>

            <StyledDownloadForLinux>
              <StyledDownloadOSLogo>
                <SVG name="linux" />
              </StyledDownloadOSLogo>

              <StyledLinuxInstallerWrapper>
                <StyledDownloadButton as={"a"} href={DEB_INSTALLER}>
                  <SVG name="download" />
                  .deb
                </StyledDownloadButton>
                <StyledDownloadButton as={"a"} href={APP_IMAGE_INSTALLER}>
                  <SVG name="download" />
                  .AppImage
                </StyledDownloadButton>
                <StyledDownloadButton as={"a"} href={RPM_INSTALLER}>
                  <SVG name="download" />
                  .rpm
                </StyledDownloadButton>

                <span>Or</span>

                <StyledDownloadButton
                  id="snap-store-btn"
                  as={"a"}
                  href="https://snapcraft.io/productivity-timer"
                >
                  <span>Get it from Snap Store</span>
                  <SVG name="snap-store" />
                </StyledDownloadButton>
              </StyledLinuxInstallerWrapper>
            </StyledDownloadForLinux>

            <StyledDownloadForMac>
              <StyledDownloadOSLogo>
                <SVG name="apple" />
              </StyledDownloadOSLogo>

              <StyledDownloadButton as={"a"} href={MAC_INSTALLER}>
                <SVG name="download" />
                Mac OS 10.10+
              </StyledDownloadButton>
            </StyledDownloadForMac>
          </StyledDownloadButtonWrapper>
        </StyledDownloadContent>
      </LazyLoad>
    </StyledDownload>
  );
};

export default Download;
