import React, { useState } from "react";
import { useStaticQuery, graphql } from "gatsby";
import {
  StyledFeatures,
  StyledFeatureList,
  StyledFeatureItem,
  StyledShowMore,
} from "styles";
import { SVG, Header } from "components";
import { MarkDownProps } from "types";

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

  const renderLastItem = () => {
    if (frontmatter.featureList && frontmatter.featureList.length > limit) {
      return (
        <StyledFeatureItem
          as={"button"}
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
      <StyledShowMore
        href="/"
        to="road-map"
        offset={-24}
        duration={420}
        smooth
        spy
      >
        <h3>
          <SVG name="more" />
          More of it soon...
        </h3>
      </StyledShowMore>
    );
  };

  return (
    <StyledFeatures id="app-features">
      <Header frontMatter={frontmatter} />

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
