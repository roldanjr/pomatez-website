import styled from "styled-components";

export const StyledHeader = styled.header`
  text-align: center;
  max-width: 60rem;

  margin: 0 auto;

  display: grid;
  row-gap: 0.8rem;
  align-content: start;

  & > h2 {
    font-size: 3.6rem;
    font-weight: 500;
    color: var(--color-heading-text);

    & > span {
      color: var(--color-primary-variant);
    }
  }

  & > p {
    font-size: 1.8rem;
    color: var(--color-body-text);
  }
`;
