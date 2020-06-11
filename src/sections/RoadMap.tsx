import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import {
  StyledRoadMap,
  StyledHeader,
  StyledRoadMapList,
  StyledRoadMapItem,
} from "styles";
import { MarkDownProps } from "types";
import { SVG } from "components";

const RoadMap: React.FC = () => {
  const { allMarkdownRemark } = useStaticQuery<MarkDownProps>(graphql`
    {
      allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/roadMap/" } }) {
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
    <StyledRoadMap id="road-map">
      <StyledHeader>
        <h2>
          <span>{titleParts[0]}</span>
          &nbsp;
          {titleParts[1]}
        </h2>
        <p>{frontmatter.subTitle}</p>
      </StyledHeader>

      <StyledRoadMapList>
        {frontmatter.featureList?.map((feature, index) => (
          <StyledRoadMapItem key={index}>
            <h3>
              <SVG name={feature.icon} />
              {feature.heading}
            </h3>
            <p>{feature.description}</p>
          </StyledRoadMapItem>
        ))}
        <StyledRoadMapItem>
          <h3>
            <SVG name="more" />
            More of it soon...
          </h3>
        </StyledRoadMapItem>
      </StyledRoadMapList>
    </StyledRoadMap>
  );
};

export default RoadMap;
