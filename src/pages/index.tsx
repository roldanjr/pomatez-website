import React from "react";
import { graphql } from "gatsby";
import { SEO, Layout } from "components";
import { Landing, Features, HowItWorks, RoadMap, Download } from "sections";
import { MarkDownProps } from "types";

type Props = {
  data: MarkDownProps;
};

const IndexPage: React.FC<Props> = ({ data }) => {
  const socialImage =
    data.allMarkdownRemark.edges[0].node.frontmatter.featuredImage
      .childImageSharp.resize;

  return (
    <Layout>
      <SEO
        includeSchema
        metaImage={{
          src: socialImage.src,
          width: socialImage.width,
          height: socialImage.height,
        }}
      />
      <Landing />
      <Features />
      <HowItWorks />
      <RoadMap />
      <Download />
    </Layout>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  {
    allMarkdownRemark: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/hero/" } }
    ) {
      edges {
        node {
          frontmatter {
            featuredImage {
              childImageSharp {
                resize(width: 1600) {
                  src
                  width
                  height
                }
              }
            }
          }
        }
      }
    }
  }
`;
