import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import {
  StyledFeatures,
  StyledHeader,
  StyledFeatureList,
  StyledFeatureItem,
} from "styles";
import { MarkDownProps } from "types";
import { SVG } from "components";

const Features: React.FC = () => {
  const { allMarkdownRemark } = useStaticQuery<MarkDownProps>(graphql`
    {
      allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/features/" } }) {
        edges {
          node {
            frontmatter {
              title
              subTitle
              featureList {
                icon
                heading
                description
              }
            }
          }
        }
      }
    }
  `);

  const { frontmatter } = allMarkdownRemark.edges[0].node;

  const titleParts = frontmatter.title.split(" ");

  return (
    <StyledFeatures id="app-features">
      <StyledHeader>
        <h2>
          <span>{titleParts[0]}</span>
          &nbsp;
          {titleParts[1]}
        </h2>
        <p>{frontmatter.subTitle}</p>
      </StyledHeader>

      <StyledFeatureList>
        {frontmatter.featureList?.map((feature, index) => (
          <StyledFeatureItem key={index}>
            <h3>
              <SVG name={feature.icon} />
              {feature.heading}
            </h3>
            <p>{feature.description}</p>
          </StyledFeatureItem>
        ))}
        <StyledFeatureItem>
          <h3>
            <SVG name="more" />
            More of it soon...
          </h3>
        </StyledFeatureItem>
      </StyledFeatureList>
    </StyledFeatures>
  );
};

export default Features;
