import React, { useState } from "react";
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

  const [limit, setLimit] = useState(5);

  const { frontmatter } = allMarkdownRemark.edges[0].node;

  const titleParts = frontmatter.title.split(" ");

  const renderLastItem = () => {
    if (frontmatter.featureList && frontmatter.featureList.length > limit) {
      return (
        <StyledFeatureItem
          onClick={() => {
            setLimit(prevLimit => prevLimit + 5);
          }}
        >
          <h3>
            <SVG name="more" />
            Show more...
          </h3>
        </StyledFeatureItem>
      );
    }
    return (
      <StyledFeatureItem as={"a"} href="#road-map">
        <h3>
          <SVG name="more" />
          More of it soon...
        </h3>
      </StyledFeatureItem>
    );
  };

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
        {frontmatter.featureList
          ?.map((feature, index) => (
            <StyledFeatureItem key={index}>
              <h3>
                <SVG name={feature.icon} />
                {feature.heading}
              </h3>
              <p>{feature.description}</p>
            </StyledFeatureItem>
          ))
          .slice(0, limit)}
        {renderLastItem()}
      </StyledFeatureList>
    </StyledFeatures>
  );
};

export default Features;
