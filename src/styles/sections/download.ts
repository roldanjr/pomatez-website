import styled from "styled-components";
import { SectionStyle } from "styles/mixins";

export const StyledDownload = styled.section`
  ${SectionStyle};
`;

export const StyledDownloadOSLogo = styled.div`
  & > svg {
    width: 12rem;
    height: 12rem;
    fill: currentColor;
  }
`;

export const StyledDownloadContent = styled.div`
  display: grid;
  align-items: start;
  justify-items: center;
  justify-content: center;
  grid-template-columns: repeat(3, 1fr);
`;

export const StyledDownloadForWindows = styled.div`
  color: var(--color-primary-variant);

  display: grid;
  row-gap: 4.8rem;
  justify-items: center;

  & > button {
    font-size: 1.6rem;
    padding: 1.2rem 2.4rem;
    box-shadow: 0 2px 4px 0 var(--color-shadow-secondary);

    &:hover {
      box-shadow: 0 3px 6px 0 var(--color-shadow-secondary);
    }

    & > svg {
      width: 2.2rem;
      height: 2.2rem;
      margin-right: 1rem;
      margin-left: -0.6rem;
    }
  }
`;

export const StyledLinuxInstallerWrapper = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
  grid-template-columns: repeat(3, max-content);
  gap: 2rem;

  & > span {
    grid-column: 2 / 3;

    font-weight: 500;

    width: 100%;
    height: 2rem;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  & > button#snap-store-btn {
    grid-column: 1 / -1;
    justify-self: center;

    width: 20rem;
    padding: 0;
    padding-top: 0.4rem;

    display: flex;
    align-items: center;
    justify-content: center;

    & > svg {
      width: 18.2rem;
      height: 5.6rem;
      fill: transparent;

      margin: 0 auto;
    }
  }

  & > button {
    font-size: 1.6rem;
    padding: 1.2rem 2.4rem;
    box-shadow: 0 2px 4px 0 var(--color-shadow-secondary);

    &:hover {
      box-shadow: 0 3px 6px 0 var(--color-shadow-secondary);
    }

    & > svg {
      width: 2.2rem;
      height: 2.2rem;
      margin-right: 1rem;
      margin-left: -0.6rem;
    }
  }
`;

export const StyledDownloadForLinux = styled.div`
  display: grid;
  row-gap: 4.8rem;
  justify-items: center;
`;

export const StyledDownloadForMac = styled.div`
  color: var(--color-heading-text);

  display: grid;
  row-gap: 4.8rem;
  justify-items: center;

  & > button {
    font-size: 1.6rem;
    padding: 1.2rem 2.4rem;
    box-shadow: 0 2px 4px 0 var(--color-shadow-secondary);

    &:hover {
      box-shadow: 0 3px 6px 0 var(--color-shadow-secondary);
    }

    & > svg {
      width: 2.2rem;
      height: 2.2rem;
      margin-right: 1rem;
      margin-left: -0.6rem;
    }
  }
`;
