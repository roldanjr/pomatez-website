import styled from "styled-components";
import { Link } from "gatsby";

export const StyledNav = styled.nav`
  width: 100%;
  height: 5.6rem;

  padding: 0 14rem;

  display: grid;
  align-items: center;
  grid-template-columns: max-content 1fr max-content;
  column-gap: 4rem;

  background-color: var(--color-bg-primary);
  box-shadow: 0 2px 4px 0 var(--color-shadow-primary);

  position: sticky;
  top: 0;
  left: 0;
  z-index: 100;
`;

export const StyledNavLogo = styled(Link)`
  display: grid;
  align-items: center;
  grid-auto-flow: column;

  & > div:first-child {
    margin-right: 1rem;
  }

  & > label {
    font-size: 1.8rem;
    font-weight: 500;

    text-transform: uppercase;
    color: var(--color-heading-text);
  }
`;

export const StyledNavLinks = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;

  font-size: 1.6rem;
  text-transform: capitalize;

  & > li:not(:last-of-type) {
    margin-right: 2rem;
  }

  & > li:hover {
    color: var(--color-primary-variant);
  }
`;

export const StyledNavThemeToggler = styled.button`
  padding: 0.8rem 1.2rem;

  border: none;
  border-radius: 3px;

  display: flex;
  align-items: center;

  font-size: 1.6rem;
  background-color: transparent;

  &:hover {
    color: var(--color-heading-text);
  }

  & > svg {
    width: 1.25em;
    height: 1.25em;

    margin-left: 1.2rem;

    fill: currentColor;
  }
`;

export const StyledNavButtonWrapper = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: repeat(2, max-content);
  column-gap: 2rem;
`;
