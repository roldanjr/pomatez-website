import styled from "styled-components";
import { SectionStyle } from "styles/mixins";

export const StyledHowItWorks = styled.section`
  ${SectionStyle}
  padding-bottom: 16rem;
`;

export const StyledHowItWorkContent = styled.div`
  display: grid;
  column-gap: 6rem;
  grid-template-columns: 40rem 1fr;
  align-content: start;
`;

export const StyledHowItWorkStepList = styled.ol`
  list-style: none;
  counter-reset: step;

  max-width: 40rem;

  display: grid;
  row-gap: 1.6rem;

  & > h3 {
    font-size: 2rem;
    font-weight: 700;
    color: var(--color-primary-variant);
  }
`;

export const StyledHowItWorkStep = styled.li`
  counter-increment: step;

  display: grid;
  row-gap: 0.8rem;

  & > h4 {
    font-size: 2.4rem;
    font-weight: 500;
    color: var(--color-heading-text);

    position: relative;

    &::before {
      content: "0" counter(step) ".";
      margin-right: 0.6rem;
      color: var(--color-primary-variant);
    }

    &::after {
      content: "";
      display: block;
      width: 100%;
      max-width: 60rem;
      height: 1px;
      background-color: var(--color-border-primary);
      margin-top: 0.8rem;
    }
  }

  & > p {
    /* margin-left: 3.8rem; */
  }
`;

export const StyledHowItWorkVideo = styled.div`
  border-radius: 3px;
  background-color: var(--color-bg-primary);
  box-shadow: 0 2px 6px -1px var(--color-shadow-primary);
`;
