import { css } from "styled-components";

export const SectionStyle = css`
  width: 100%;
  height: max-content;

  padding: 10rem 14rem;

  display: grid;
  row-gap: 6rem;
  align-content: start;

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
