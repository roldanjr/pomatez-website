import styled, { css } from "styled-components";
import { Link } from "react-scroll";
import { SectionStyle, SectionContentStyle } from "../mixins";
import media from "../media";

export const StyledFeatures = styled.section`
  ${SectionStyle};
`;

export const StyledFeatureContent = styled.div`
  ${SectionContentStyle};
`;

export const StyledFeatureList = styled.ul`
  list-style: none;

  display: grid;
  align-content: start;
  justify-content: center;
  grid-template-columns: repeat(3, 1fr);
  gap: 6rem;

  ${media.laptopMd} {
    gap: 4rem;
  }

  ${media.laptopSm} {
    gap: 3.2rem;
  }

  ${media.tabletXl} {
    grid-template-columns: repeat(2, 1fr);
  }

  ${media.tabletMd} {
    grid-template-columns: 1fr;
  }
`;

const FeatureItemStyle = css`
  height: 100%;

  text-align: center;

  display: grid;
  align-content: start;
  row-gap: 1.2rem;
  padding: 4rem;

  color: var(--color-heading-text);

  border-radius: 3px;
  border: 1px solid var(--color-border-secondary);
  background: var(--color-bg-secondary);
  box-shadow: 0 0 0 0 var(--color-primary-variant);
  transition: all 200ms ease;

  ${media.laptopSm} {
    row-gap: 0.8rem;
    padding: 2.4rem;
    padding-bottom: 3.2rem;
  }

  &:hover {
    color: var(--color-primary-variant);
    border-color: var(--color-primary-variant);
    background-color: var(--color-bg-primary);
    box-shadow: 0 0 0 3px var(--color-primary-variant);
  }

  &:last-of-type {
    cursor: pointer;
    height: max-content;
  }

  & > h3 {
    font-size: 2rem;
    font-weight: 500;

    display: flex;
    flex-direction: column;
    align-items: center;

    color: currentColor;

    & > svg {
      width: 1.75em;
      height: 1.75em;
      fill: currentColor;

      margin-bottom: 0.8rem;
    }
  }

  & > p {
    color: var(--color-body-text);
  }
`;

export const StyledFeatureItem = styled.li`
  ${FeatureItemStyle};
`;

export const StyledShowMore = styled(Link)`
  ${FeatureItemStyle};
`;
