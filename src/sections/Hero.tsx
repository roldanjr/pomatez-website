import React from "react";
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
              sub_title
            }
          }
        }
      }
    }
  `);

  const { frontmatter } = allMarkdownRemark.edges[0].node;

  return (
    <StyledHero>
      <StyledWaterMarkLeft />
      <StyledWaterMarkRight />

      <StyledHeroContent>
        <StyledHeroHeader>
          <h1>{frontmatter.title}</h1>
          <p>{frontmatter.sub_title}</p>
        </StyledHeroHeader>

        <StyledHeroCtaWrapper>
          <StyledHeroCtaDownloadButton>
            <SVG name="windows" />
            Download for Windows
          </StyledHeroCtaDownloadButton>
          <StyledHeroCtaGithubLink>
            <SVG name="github" />
            View on Github
          </StyledHeroCtaGithubLink>
        </StyledHeroCtaWrapper>
      </StyledHeroContent>
    </StyledHero>
  );
};

export default Hero;
