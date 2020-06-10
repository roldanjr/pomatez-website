import styled from "styled-components";
import { SectionStyle } from "styles/mixins";

export const StyledFeatures = styled.section`
  ${SectionStyle};

  position: relative;
  overflow: hidden;

  width: 100%;
  height: max-content;

  background: var(--color-bg-primary);
  box-shadow: 0 3px 6px 0 var(--color-shadow-primary);

  display: grid;
  row-gap: 6rem;
  align-content: start;
`;

export const StyledFeatureList = styled.ul`
  list-style: none;

  display: grid;
  align-content: start;
  justify-content: center;
  grid-template-columns: repeat(3, max-content);
  row-gap: 2rem;
  column-gap: 6rem;
`;

export const StyledFeatureItem = styled.li`
  max-width: 40rem;
  height: max-content;

  text-align: center;

  display: grid;
  align-content: start;
  row-gap: 1.2rem;
  padding: 4rem;

  border-radius: 3px;
  color: var(--color-heading-text);
  background-color: var(--color-bg-primary);
  box-shadow: 0 0 0 0 var(--color-shadow-primary);
  transition: all 200ms ease;

  &:hover {
    color: var(--color-primary-variant);
    background: var(--color-button-normal);
    box-shadow: 0 3px 16px -3px var(--color-shadow-secondary);
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
