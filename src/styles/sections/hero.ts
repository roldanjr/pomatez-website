import styled from "styled-components";
// import Image from "gatsby-image";

import { SectionStyle } from "styles/mixins";
import { StyledButtonPrimary, StyledButtonNormal } from "styles";

import WaterMarkLeft from "assets/images/watermark-left.svg";
import WaterMarkRight from "assets/images/watermark-right.svg";

// import PreviewImageLight from "assets/images/preview-image-light.svg";
// import PreviewImageDark from "assets/images/preview-image-dark.svg";

export const StyledHero = styled.section`
  ${SectionStyle};

  position: relative;
  overflow: hidden;

  width: 100%;
  /* height: calc(100vh - 5.6rem); */
  padding-bottom: 14rem;

  background: var(--color-hero-gradient);
`;

export const StyledWaterMarkLeft = styled(WaterMarkLeft)`
  position: absolute;
  top: 0;
  left: 0;
  margin-left: -2.4rem;
  margin-top: -2rem;
`;

export const StyledWaterMarkRight = styled(WaterMarkRight)`
  position: absolute;
  top: 0;
  right: 0;
  margin-right: -2.4rem;
  margin-top: -2rem;
`;

export const StyledHeroContent = styled.div`
  display: grid;
  row-gap: 4rem;
  justify-content: center;
  justify-items: center;

  position: relative;
  z-index: 10;
`;

export const StyledHeroHeader = styled.header`
  text-align: center;
  max-width: 60rem;

  display: grid;
  row-gap: 0.8rem;

  & > h1 {
    font-size: 4rem;
    font-weight: 500;
    color: var(--color-heading-text);
  }

  & > p {
    font-size: 2rem;
  }
`;

export const StyledHeroCtaWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, max-content);
  column-gap: 2rem;
`;

export const StyledHeroCtaDownloadButton = styled(StyledButtonPrimary)`
  font-size: 1.6rem;
  padding: 1.2rem 2.4rem;
  box-shadow: 0 3px 6px 0 var(--color-shadow-secondary);

  & > svg {
    width: 2.2rem;
    height: 2.2rem;
    margin-right: 1rem;
    margin-left: -0.6rem;
  }
`;

export const StyledHeroCtaGithubLink = styled(StyledButtonNormal)`
  width: 24.4rem;
  font-size: 1.6rem;
  padding: 1.2rem 2.4rem;
  box-shadow: 0 3px 6px 0 var(--color-shadow-primary);

  & > svg {
    width: 2.2rem;
    height: 2.2rem;
    margin-right: 1rem;
  }
`;

export const StyledHeroPreview = styled.div`
  width: 100%;
  height: 100%;
  max-height: 33rem;

  position: absolute;
  bottom: 0;
  left: 0;

  background-color: var(--color-bg-primary);
`;
