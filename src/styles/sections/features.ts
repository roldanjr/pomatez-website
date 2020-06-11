import styled from "styled-components";
import { SectionStyle } from "styles/mixins";

export const StyledFeatures = styled.section`
  ${SectionStyle};

  padding-bottom: 14rem;

  position: relative;
  background: var(--color-bg-primary);
  box-shadow: 0 1px 4px -1px var(--color-shadow-primary);
`;

export const StyledFeatureList = styled.ul`
  list-style: none;

  display: grid;
  align-content: start;
  justify-content: center;
  grid-template-columns: repeat(3, max-content);
  row-gap: 6rem;
  column-gap: 6rem;
`;

export const StyledFeatureItem = styled.li`
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