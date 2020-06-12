import React, { useContext } from "react";
import { useStaticQuery, graphql } from "gatsby";
import { StyledAppPreviewImage } from "styles";
import { ThemeContext } from "contexts";
import { FluidImageProps } from "types";

type QueryProps = {
  workTimePreviewLight: FluidImageProps;
  workTimePreviewDark: FluidImageProps;
  shortBreakPreviewLight: FluidImageProps;
  shortBreakPreviewDark: FluidImageProps;
  longBreakPreviewLight: FluidImageProps;
  longBreakPreviewDark: FluidImageProps;
  configPreviewLight: FluidImageProps;
  configPreviewDark: FluidImageProps;
  settingsPreviewLight: FluidImageProps;
  settingsPreviewDark: FluidImageProps;
  tasksPreviewLight: FluidImageProps;
  tasksPreviewDark: FluidImageProps;
};

const PreviewImages: React.FC = () => {
  const {
    workTimePreviewLight,
    workTimePreviewDark,
    shortBreakPreviewLight,
    shortBreakPreviewDark,
    longBreakPreviewLight,
    longBreakPreviewDark,
    configPreviewLight,
    configPreviewDark,
    settingsPreviewLight,
    settingsPreviewDark,
    tasksPreviewLight,
    tasksPreviewDark,
  } = useStaticQuery<QueryProps>(graphql`
    {
      workTimePreviewLight: file(relativePath: { eq: "work-time-light.PNG" }) {
        childImageSharp {
          fluid(maxWidth: 340, quality: 100) {
            ...GatsbyImageSharpFluid
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
      workTimePreviewDark: file(relativePath: { eq: "work-time-dark.PNG" }) {
        childImageSharp {
          fluid(maxWidth: 340, quality: 100) {
            ...GatsbyImageSharpFluid
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
      shortBreakPreviewLight: file(
        relativePath: { eq: "short-break-light.PNG" }
      ) {
        childImageSharp {
          fluid(maxWidth: 340, quality: 100) {
            ...GatsbyImageSharpFluid
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
      shortBreakPreviewDark: file(
        relativePath: { eq: "short-break-dark.PNG" }
      ) {
        childImageSharp {
          fluid(maxWidth: 340, quality: 100) {
            ...GatsbyImageSharpFluid
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
      longBreakPreviewLight: file(
        relativePath: { eq: "long-break-light.PNG" }
      ) {
        childImageSharp {
          fluid(maxWidth: 340, quality: 100) {
            ...GatsbyImageSharpFluid
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
      longBreakPreviewDark: file(relativePath: { eq: "long-break-dark.PNG" }) {
        childImageSharp {
          fluid(maxWidth: 340, quality: 100) {
            ...GatsbyImageSharpFluid
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
      configPreviewLight: file(relativePath: { eq: "config-light.PNG" }) {
        childImageSharp {
          fluid(maxWidth: 340, quality: 100) {
            ...GatsbyImageSharpFluid
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
      configPreviewDark: file(relativePath: { eq: "config-dark.PNG" }) {
        childImageSharp {
          fluid(maxWidth: 340, quality: 100) {
            ...GatsbyImageSharpFluid
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
      settingsPreviewLight: file(relativePath: { eq: "settings-light.PNG" }) {
        childImageSharp {
          fluid(maxWidth: 340, quality: 100) {
            ...GatsbyImageSharpFluid
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
      settingsPreviewDark: file(relativePath: { eq: "settings-dark.PNG" }) {
        childImageSharp {
          fluid(maxWidth: 340, quality: 100) {
            ...GatsbyImageSharpFluid
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
      tasksPreviewLight: file(relativePath: { eq: "tasks-light.PNG" }) {
        childImageSharp {
          fluid(maxWidth: 340, quality: 100) {
            ...GatsbyImageSharpFluid
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
      tasksPreviewDark: file(relativePath: { eq: "tasks-dark.PNG" }) {
        childImageSharp {
          fluid(maxWidth: 340, quality: 100) {
            ...GatsbyImageSharpFluid
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
    }
  `);

  const { isDarkMode } = useContext(ThemeContext);

  return (
    <React.Fragment>
      <StyledAppPreviewImage
        fluid={
          isDarkMode
            ? tasksPreviewDark.childImageSharp.fluid
            : tasksPreviewLight.childImageSharp.fluid
        }
        alt="tasks preview"
      />
      <StyledAppPreviewImage
        fluid={
          isDarkMode
            ? settingsPreviewDark.childImageSharp.fluid
            : settingsPreviewLight.childImageSharp.fluid
        }
        alt="settings preview"
      />
      <StyledAppPreviewImage
        fluid={
          isDarkMode
            ? configPreviewDark.childImageSharp.fluid
            : configPreviewLight.childImageSharp.fluid
        }
        alt="config preview"
      />
      <StyledAppPreviewImage
        fluid={
          isDarkMode
            ? workTimePreviewDark.childImageSharp.fluid
            : workTimePreviewLight.childImageSharp.fluid
        }
        alt="work time preview"
      />
      <StyledAppPreviewImage
        fluid={
          isDarkMode
            ? shortBreakPreviewDark.childImageSharp.fluid
            : shortBreakPreviewLight.childImageSharp.fluid
        }
        alt="short break preview"
      />
      <StyledAppPreviewImage
        fluid={
          isDarkMode
            ? longBreakPreviewDark.childImageSharp.fluid
            : longBreakPreviewLight.childImageSharp.fluid
        }
        alt="long break preview"
      />
    </React.Fragment>
  );
};

export default React.memo(PreviewImages);
