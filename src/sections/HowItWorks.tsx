import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import LazyLoad from "react-lazyload";
import {
  StyledHowItWorks,
  StyledHowItWorkStepList,
  StyledHowItWorkStep,
  StyledFeatureContent,
} from "styles";
import { MarkDownProps } from "types";
import { Header, Preloader } from "components";

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
      <LazyLoad
        once={true}
        offset={80}
        height="800px"
        placeholder={<Preloader />}
      >
        <StyledFeatureContent>
          <Header frontMatter={frontmatter} />

          <StyledHowItWorkStepList>
            {frontmatter.stepList?.map((step, index) => (
              <StyledHowItWorkStep key={index}>
                <h4>{step.heading}</h4>
                <p>{step.description}</p>
              </StyledHowItWorkStep>
            ))}
          </StyledHowItWorkStepList>
        </StyledFeatureContent>
      </LazyLoad>
    </StyledHowItWorks>
  );
};

export default HowItWorks;
