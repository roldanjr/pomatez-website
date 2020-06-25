import React from "react";
import {
  StyledLoaderContainer,
  StyledLoaderWrapper,
  StyledLoaderBox,
  StyledLoaderLabel,
} from "styles";

export const Preloader = () => (
  <StyledLoaderContainer>
    <StyledLoaderWrapper>
      <StyledLoaderBox />
      <StyledLoaderBox />
      <StyledLoaderBox />
      <StyledLoaderBox />
      <StyledLoaderBox />
    </StyledLoaderWrapper>
    <StyledLoaderLabel>Loading</StyledLoaderLabel>
  </StyledLoaderContainer>
);
