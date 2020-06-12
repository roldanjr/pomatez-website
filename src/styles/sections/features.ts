import styled, { css } from "styled-components";
import { Link } from "react-scroll";
import { SectionStyle } from "styles/mixins";

export const StyledFeatures = styled.section`
  ${SectionStyle};
`;

export const StyledFeatureList = styled.ul`
  list-style: none;

  display: grid;
  align-content: start;
  justify-content: center;
  grid-template-columns: repeat(3, 1fr);
  row-gap: 6rem;
  column-gap: 6rem;
`;

const FeatureItemStyle = css`
  max-width: 40rem;
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
