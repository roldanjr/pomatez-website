import styled, { css } from "styled-components";

export const ButtonStyles = css`
  padding: 0.8rem 2rem;

  border: none;
  border-radius: 3px;

  display: flex;
  align-items: center;
  justify-content: center;

  font-weight: 500;

  transition: box-shadow 200ms ease;

  & > svg {
    width: 1.25em;
    height: 1.25em;

    margin-right: 0.8rem;
    margin-left: -0.4rem;

    fill: currentColor;
  }
`;

export const StyledButtonNormal = styled.button`
  ${ButtonStyles};

  color: var(--color-heading-text);
  background: var(--color-bg-button-normal);

  &:hover {
    background: var(--color-bg-button-normal-hover);
  }
`;

export const StyledButtonPrimary = styled.button`
  ${ButtonStyles};

  color: white;
  background: var(--color-bg-button-primary);

  &:hover {
    background: var(--color-bg-button-primary-hover);
  }
`;
