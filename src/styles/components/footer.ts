import styled from "styled-components";
import media from "styles/media";

export const StyledGithubLink = styled.a`
  &:hover {
    color: var(--color-primary-variant);
  }

  & > svg {
    width: 2.4rem;
    height: 2.4rem;
    fill: currentColor;
  }
`;

export const StyledCopyrightText = styled.p`
  font-size: 1.4rem;
  font-weight: 500;
  text-transform: uppercase;
`;

export const StyledFooterNote = styled.p`
  & > a {
    color: var(--color-primary-variant);

    &:hover {
      color: var(--color-primary);
    }
  }
`;

export const StyledFooterContent = styled.div`
  display: grid;
  row-gap: 0.8rem;
  height: max-content;

  margin: 0 auto;
`;

export const StyledFooter = styled.footer`
  width: 100%;
  min-height: 6.4rem;

  padding: 3.2rem;
  text-align: center;

  background: var(--color-bg-footer);
  box-shadow: 0 1px 4px -1px var(--color-shadow-secondary);

  position: relative;

  ${media.mobileLg} {
    padding: 3.2rem 2rem;
  }
`;
