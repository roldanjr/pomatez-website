import styled, { css } from "styled-components";
import Image from "gatsby-image";

import { Link } from "react-scroll";

import { SectionStyle, SectionContentStyle } from "../mixins";
import { ButtonStyles, StyledButtonNormal } from "..";

import WaterMarkLeft from "../../assets/images/watermark-left.svg";
import WaterMarkRight from "../../assets/images/watermark-right.svg";

import media from "../media";

export const StyledLanding = styled.section`
  ${SectionStyle};
  position: relative;
  overflow: hidden;
  padding-top: 8rem;

  ${media.laptopSm} {
    padding-top: 8rem;
    padding-bottom: 8rem;
  }
`;

export const StyledLandingContent = styled.div`
  ${SectionContentStyle};
  row-gap: 4.8rem;
`;

const WaterMarkStyle = css`
  position: absolute;
  top: 0;

  ${media.laptopXs} {
    width: 38rem;
    height: 38rem;
  }

  ${media.tabletXl} {
    width: 32rem;
    height: 32rem;
  }

  ${media.tabletMd} {
    width: 28rem;
    height: 28rem;
  }

  ${media.tabletSm} {
    width: 24rem;
    height: 24rem;
  }

  ${media.mobileLg} {
    width: 20rem;
    height: 20rem;
  }

  ${media.mobileXs} {
    width: 16rem;
    height: 16rem;
  }
`;

export const StyledWaterMarkLeft = styled(WaterMarkLeft)`
  ${WaterMarkStyle};
  left: 0;
  margin-left: -2.4rem;
  margin-top: -2rem;
`;

export const StyledWaterMarkRight = styled(WaterMarkRight)`
  ${WaterMarkStyle};
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
  max-width: 64rem;

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

    ${media.laptopSm} {
      line-height: 1.4;
    }
  }
`;

export const StyledLandingCtaWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, max-content);
  gap: 2rem;

  ${media.tabletMd} {
    width: 100%;
    grid-template-columns: 1fr;
  }
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

  ${media.laptopSm} {
    min-width: 24rem;
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

  ${media.laptopSm} {
    min-width: 24rem;
  }
`;

export const StyledAppPreviewWrapper = styled.div`
  position: relative;
  z-index: 10;

  display: grid;
  grid-template-columns: repeat(6, max-content);
  align-items: center;
  justify-content: center;

  ${media.tabletLg} {
    grid-template-columns: repeat(3, max-content);
    row-gap: 3.2rem;
    column-gap: -2rem;
  }

  @media screen and (max-width: 424px) {
    display: none;
  }
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

    ${media.laptopSm} {
      width: 18rem;
    }
  }

  &:nth-child(1) {
    /* Task List */
    margin-right: -1.6rem;

    ${media.laptopMd} {
      margin-right: -4.8rem;
    }

    ${media.laptopXs} {
      margin-right: -8.6rem;
    }

    ${media.tabletXl} {
      margin-right: -12.2rem;
    }

    ${media.tabletLg} {
      grid-column: 1 / 2;

      width: 20rem;
      margin-right: -2.4rem;
    }

    ${media.tabletMd} {
      grid-column: 1 / 2;

      width: 20rem;
      margin-right: -10.4rem;
    }
  }

  &:nth-child(6) {
    /* Long Break */
    margin-left: -1.6rem;

    ${media.laptopMd} {
      margin-left: -4.8rem;
    }

    ${media.laptopXs} {
      margin-left: -8.6rem;
    }

    ${media.tabletXl} {
      margin-left: -12.2rem;
    }

    ${media.tabletLg} {
      grid-row: 1 / 2;
      grid-column: 3 / 4;

      width: 20rem;
      margin-left: -2.4rem;
    }

    ${media.tabletMd} {
      grid-row: 1 / 2;
      grid-column: 3 / 4;

      width: 20rem;
      margin-left: -10.4rem;
    }
  }

  &:nth-child(2),
  &:nth-child(5) {
    width: 22rem;
    height: max-content;
    z-index: 4;
    box-shadow: 0 2px 5px -1px var(--color-shadow-secondary);

    ${media.laptopSm} {
      width: 20rem;
    }
  }

  &:nth-child(2) {
    /* Settings */
    margin-right: -1.6rem;

    ${media.laptopMd} {
      margin-right: -4.8rem;
    }

    ${media.laptopXs} {
      margin-right: -8.6rem;
    }

    ${media.tabletXl} {
      margin-right: -12.2rem;
    }

    ${media.tabletLg} {
      grid-row: 2 / 3;
      grid-column: 3 / 4;

      margin: 0;
      margin-left: -2.4rem;
    }

    ${media.tabletMd} {
      grid-row: 2 / 3;
      grid-column: 3 / 4;

      margin: 0;
      margin-left: -10.4rem;
    }
  }

  &:nth-child(5) {
    /* Short Break */
    margin-left: -1.6rem;

    ${media.laptopMd} {
      margin-left: -4.8rem;
    }

    ${media.laptopXs} {
      margin-left: -8.6rem;
    }

    ${media.tabletXl} {
      margin-left: -12.2rem;
    }

    ${media.tabletLg} {
      grid-row: 1 / 2;
      grid-column: 1 / 2;

      margin: 0;
      margin-right: -2.4rem;
    }

    ${media.tabletMd} {
      grid-row: 1 / 2;
      grid-column: 1 / 2;

      margin: 0;
      margin-right: -10.4rem;
    }
  }

  &:nth-child(3),
  &:nth-child(4) {
    width: 25rem;
    height: max-content;
    z-index: 8;
    box-shadow: 0 2px 6px -1px var(--color-shadow-secondary);

    ${media.laptopSm} {
      width: 24rem;
    }
  }

  &:nth-child(3) {
    /* Config */
    margin-right: 2rem;

    ${media.tabletLg} {
      grid-row: 2 / 3;
      grid-column: 2 / 3;

      margin: 0;
    }
  }

  &:nth-child(4) {
    /* Work Time */
    ${media.tabletLg} {
      grid-row: 1 / 2;
      grid-column: 2 / 3;

      margin: 0;
    }
  }
`;
