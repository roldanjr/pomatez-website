import styled from "styled-components";

export const StyledLoaderContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1000;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  animation: enter 320ms ease;

  @keyframes enter {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

export const StyledLoaderWrapper = styled.div`
  min-width: 10rem;
  min-height: 3rem;

  margin-top: -3rem;
  margin-bottom: 0.8rem;

  display: grid;
  align-items: center;
  justify-content: center;
  grid-auto-flow: column;
  column-gap: 0.6rem;
`;

export const StyledLoaderBox = styled.div`
  width: 6px;
  height: 100%;

  border-radius: 1px;
  background-color: var(--color-primary);

  animation: stretchAnimation 1.2s ease-in-out infinite;

  &:nth-of-type(1) {
    animation-delay: -1.2s;
  }

  &:nth-of-type(2) {
    animation-delay: -1.1s;
  }

  &:nth-of-type(3) {
    animation-delay: -1s;
  }

  &:nth-of-type(4) {
    animation-delay: -0.9s;
  }

  &:nth-of-type(5) {
    animation-delay: -0.8s;
  }

  @keyframes stretchAnimation {
    0%,
    40%,
    100% {
      transform: scaleY(0.4);
    }
    20% {
      transform: scaleY(1);
    }
  }
`;

export const StyledLoaderLabel = styled.div`
  color: var(--color-heading-text);
  text-transform: uppercase;

  font-family: "Roboto", sans-serif;
  font-weight: 700;
`;
