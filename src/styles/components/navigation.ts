import styled, { css } from "styled-components";
import { Link } from "react-scroll";
import { ButtonStyles } from "./button";
import { SectionContentStyle } from "../mixins";
import media from "../media";

export const StyledNav = styled.nav`
  width: 100%;
  height: 5.6rem;

  padding: 0 5.6rem;

  background-color: var(--color-bg-primary);
  box-shadow: 0 2px 4px 0 var(--color-shadow-primary);

  position: sticky;
  top: 0;
  left: 0;
  z-index: 100;

  ${media.laptopSm} {
    padding: 0 4rem;
  }

  ${media.tabletSm} {
    padding: 0 2rem;
  }

  ${media.mobileXs} {
    padding: 0 1.6rem;
  }
`;

export const StyledNavContent = styled.div`
  ${SectionContentStyle};

  align-content: center;
  grid-template-columns: max-content 1fr;
  column-gap: 4rem;

  ${media.laptopSm} {
    column-gap: 2.8rem;
  }
`;

export const StyledNavLogo = styled(Link)`
  display: grid;
  align-items: center;
  grid-auto-flow: column;

  font-size: 1.8rem;
  font-weight: 500;

  text-transform: uppercase;
  color: var(--color-heading-text);

  & > div:first-child {
    width: 1.56em;
    height: 1.56em;
    margin-right: 1rem;
  }
`;

type MenuProps = {
  showSidebar?: boolean;
};

export const StyledNavAsideWrapper = styled.div<MenuProps>`
  display: grid;
  align-content: center;
  grid-template-columns: 1fr max-content;
  column-gap: 4rem;

  ${media.laptopSm} {
    column-gap: 2.8rem;
  }

  ${media.laptopXs} {
    grid-template-columns: 1fr;
    align-content: start;
    row-gap: 4rem;

    position: fixed;
    top: 0;
    right: 0;

    width: 32rem;
    height: 100%;
    overflow-y: auto;

    padding: 8rem 3.2rem;

    background: var(--color-bg-primary);
    box-shadow: 0 3px 6px var(--color-shadow-primary);

    ${p =>
      p.showSidebar
        ? css`
            transition: transform 160ms ease;
            transform: translateX(0);
          `
        : css`
            transition: transform 160ms ease-out;
            transform: translateX(100%);
          `}
  }
`;

export const StyledSideNavDimmer = styled.div<MenuProps>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;

  backdrop-filter: blur(8px);
  background-color: var(--color-shadow-primary);
  transition: all 160ms ease;

  ${p =>
    p.showSidebar
      ? css`
          opacity: 1;
          visibility: visible;
        `
      : css`
          opacity: 0;
          visibility: hidden;
        `}
`;

export const StyledNavLinks = styled.ul`
  width: max-content;

  list-style: none;
  display: flex;
  align-items: center;

  font-size: 1.6rem;
  text-transform: capitalize;

  cursor: pointer;

  ${media.laptopXs} {
    width: 100%;
    display: grid;
    row-gap: 2rem;
    padding-left: 6.4rem;

    font-weight: 500;

    & > li:not(:last-of-type) {
      margin-right: 0;
    }
  }

  & > li:not(:last-of-type) {
    margin-right: 2rem;

    ${media.laptopSm} {
      margin-right: 1.6rem;
    }
  }

  & > li a:hover,
  & > li a.active {
    color: var(--color-primary-variant);
  }
`;

export const StyledNavLinkAnchor = styled(Link)``;

export const StyledNavDownloadButton = styled(Link)`
  ${ButtonStyles};

  color: white;
  background: var(--color-bg-button-primary);

  &:hover {
    background: var(--color-bg-button-primary-hover);
  }
`;

export const StyledNavThemeToggler = styled.button`
  padding: 0.8rem 1.2rem;

  border: none;
  border-radius: 3px;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 1.6rem;
  background-color: transparent;

  ${media.laptopXs} {
    font-weight: 500;
    border: 1px solid var(--color-border-secondary);
    background: var(--color-bg-button-normal);
  }

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

  ${media.laptopXs} {
    grid-template-columns: 1fr;
    row-gap: 2rem;
    margin-bottom: 3.2rem;
  }
`;

export const StyledNavMenu = styled.div<MenuProps>`
  justify-self: end;
  border: none;
  border-radius: 3px;
  background-color: transparent;

  display: none;
  row-gap: 4px;
  align-content: center;

  ${media.laptopXs} {
    display: grid;
  }

  & > span {
    width: 24px;
    height: 3px;

    border-radius: 3px;
    background-color: ${p =>
      p.showSidebar ? "var(--color-primary)" : "var(--color-body-text)"};
    transition: all 160ms ease;

    &:nth-of-type(1) {
      transform-origin: left;
      transform: ${p => (p.showSidebar ? "rotate(45deg)" : "rotate(0deg)")};
      margin-bottom: ${p => (p.showSidebar ? "1.5px" : "0")};
    }

    &:nth-of-type(2) {
      opacity: ${p => (p.showSidebar ? "0" : "1")};
      transform: ${p => (p.showSidebar ? "translateX(12px)" : "translateX(0)")};
    }

    &:nth-of-type(3) {
      transform-origin: left;
      transform: ${p => (p.showSidebar ? "rotate(-45deg)" : "rotate(0deg)")};
      margin-top: ${p => (p.showSidebar ? "1.5px" : "0")};
    }
  }
`;
