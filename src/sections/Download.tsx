import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { StyledDownload } from "styles";
import { MarkDownProps } from "types";
import { Header } from "components";

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
    </StyledDownload>
  );
};

export default Download;
