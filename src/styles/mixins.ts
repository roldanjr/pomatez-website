import { css } from "styled-components";

export const SectionStyle = css`
  width: 100%;
  height: max-content;

  padding: 10rem 14rem;

  &:nth-child(odd) {
    background: var(--color-section-gradient-1);
  }

  &:nth-child(even) {
    position: relative;
    background: var(--color-bg-primary);
    box-shadow: 0 1px 4px -1px var(--color-shadow-primary);

    padding-bottom: 14rem;

    z-index: 20;
  }
`;

export const SectionContentStyle = css`
  width: 100%;
  max-width: 130rem;
  height: 100%;

  margin: 0 auto;

  display: grid;
  row-gap: 6rem;
  align-content: start;
`;
