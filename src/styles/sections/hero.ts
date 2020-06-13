import styled from "styled-components";
import Image from "gatsby-image";

import { Link } from "react-scroll";

import { SectionStyle, SectionContentStyle } from "styles/mixins";
import { ButtonStyles, StyledButtonNormal } from "styles";

import WaterMarkLeft from "assets/images/watermark-left.svg";
import WaterMarkRight from "assets/images/watermark-right.svg";

export const StyledLanding = styled.section`
  ${SectionStyle};
  position: relative;
  overflow: hidden;
  padding-top: 8rem;
`;

export const StyledLandingContent = styled.div`
  ${SectionContentStyle};
  row-gap: 4.8rem;
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

export const StyledLandingCTAWrapper = styled.div`
  display: grid;
  row-gap: 4rem;
  justify-content: center;
  justify-items: center;

  position: relative;
  z-index: 10;
`;

export const StyledLandingHeader = styled.header`
  text-align: center;
  max-width: 60rem;

  margin: 0 auto;

  display: grid;
  row-gap: 0.8rem;

  & > h1 {
    font-size: 4rem;
    font-weight: 500;
    color: var(--color-heading-text);
  }

  & > p {
    font-size: 2rem;
    line-height: normal;
  }
`;

export const StyledLandingCtaWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, max-content);
  column-gap: 2rem;
`;

export const StyledLandingCtaDownloadButton = styled(Link)`
  ${ButtonStyles};

  min-height: 4.8rem;
  min-width: 25rem;
  font-size: 1.6rem;
  padding: 1.2rem 2.4rem;

  color: white;
  background: var(--color-bg-button-primary);
  box-shadow: 0 2px 4px 0 var(--color-shadow-secondary);

  &:hover {
    background: var(--color-bg-button-primary-hover);
    box-shadow: 0 3px 6px 0 var(--color-shadow-primary);
  }

  & > svg {
    width: 2.2rem;
    height: 2.2rem;
    margin-right: 1rem;
    margin-left: -0.6rem;
  }
`;

export const StyledLandingCtaGithubLink = styled(StyledButtonNormal)`
  min-height: 4.8rem;
  min-width: 25rem;
  font-size: 1.6rem;
  padding: 1.2rem 2.4rem;
  box-shadow: 0 2px 4px 0 var(--color-shadow-primary);

  &:hover {
    box-shadow: 0 3px 6px 0 var(--color-shadow-primary);
  }

  & > svg {
    width: 2.2rem;
    height: 2.2rem;
    margin-right: 1rem;
  }
`;

export const StyledAppPreviewWrapper = styled.div`
  position: relative;
  z-index: 10;

  display: grid;
  grid-template-columns: repeat(6, max-content);
  align-items: center;
  justify-content: center;
`;

export const StyledAppPreviewImage = styled(Image)`
  background-color: var(--color-bg-primary);
  position: relative;

  &:nth-child(1),
  &:nth-child(6) {
    width: 20rem;
    height: max-content;
    z-index: 2;
    box-shadow: 0 2px 4px -1px var(--color-shadow-secondary);
  }

  &:nth-child(1) {
    margin-right: -1.6rem;
  }

  &:nth-child(6) {
    margin-left: -1.6rem;
  }

  &:nth-child(2),
  &:nth-child(5) {
    width: 22rem;
    height: max-content;
    z-index: 4;
    box-shadow: 0 2px 5px -1px var(--color-shadow-secondary);
  }

  &:nth-child(2) {
    margin-right: -1.6rem;
  }

  &:nth-child(5) {
    margin-left: -1.6rem;
  }

  &:nth-child(3),
  &:nth-child(4) {
    width: 25rem;
    height: max-content;
    z-index: 8;
    box-shadow: 0 2px 6px -1px var(--color-shadow-secondary);
  }

  &:nth-child(3) {
    margin-right: 2rem;
  }
`;
