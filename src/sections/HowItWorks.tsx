import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import {
  StyledHowItWorks,
  StyledHowItWorkContent,
  StyledHowItWorkStepList,
  StyledHowItWorkStep,
  StyledHowItWorkVideo,
} from "styles";
import { MarkDownProps } from "types";
import { Header } from "components";

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

  return (
    <StyledHowItWorks id="how-it-works">
      <Header frontMatter={frontmatter} />

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
