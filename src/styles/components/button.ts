import styled, { css } from "styled-components";

export const ButtonStyles = css`
  padding: 0.8rem 1.6rem;

  border: none;
  border-radius: 3px;

  display: flex;
  align-items: center;
  justify-content: center;

  font-weight: 500;

  & > svg {
    width: 1.25em;
    height: 1.25em;

    margin-right: 0.4rem;
    margin-left: -0.4rem;

    fill: currentColor;
  }
`;

export const StyledButtonNormal = styled.button`
  ${ButtonStyles};

  color: var(--color-heading-text);
  background: var(--color-bg-button-normal);
`;

export const StyledButtonPrimary = styled.button`
  ${ButtonStyles};

  color: white;
  background: var(--color-bg-button-primary);
`;
