import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import {
  StyledHowItWorks,
  StyledHeader,
  StyledHowItWorkContent,
  StyledHowItWorkStepList,
  StyledHowItWorkStep,
  StyledHowItWorkVideo,
} from "styles";
import { MarkDownProps } from "types";

const HowItWorks: React.FC = () => {
  const { allMarkdownRemark } = useStaticQuery<MarkDownProps>(graphql`
    {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/howItWorks/" } }
      ) {
        edges {
          node {
            frontmatter {
              title
              subTitle
              stepList {
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
    <StyledHowItWorks id="how-it-works">
      <StyledHeader>
        <h2>
          <span>{titleParts[0]}</span>
          &nbsp;
          {titleParts[1]}&nbsp;{titleParts[2]}
        </h2>
        <p>{frontmatter.subTitle}</p>
      </StyledHeader>

      <StyledHowItWorkContent>
        <StyledHowItWorkStepList>
          <h3>Steps</h3>
          {frontmatter.stepList?.map((step, index) => (
            <StyledHowItWorkStep key={index}>
              <h4>{step.heading}</h4>
              <p>{step.description}</p>
            </StyledHowItWorkStep>
          ))}
        </StyledHowItWorkStepList>

        <StyledHowItWorkVideo></StyledHowItWorkVideo>
      </StyledHowItWorkContent>
    </StyledHowItWorks>
  );
};

export default HowItWorks;
