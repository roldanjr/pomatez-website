import React from "react";
import {
  StyledLanding,
  StyledWaterMarkLeft,
  StyledWaterMarkRight,
  StyledLandingCTAWrapper,
  StyledAppPreviewWrapper,
  StyledLandingContent,
} from "styles";

import PreviewImages from "./PreviewImages";
import LandingCTA from "./LandingCTA";

const Landing: React.FC = () => {
  return (
    <StyledLanding id="landing">
      <StyledLandingContent>
        <StyledWaterMarkLeft />
        <StyledWaterMarkRight />
        <StyledLandingCTAWrapper>
          <LandingCTA />
        </StyledLandingCTAWrapper>
        <StyledAppPreviewWrapper>
          <PreviewImages />
        </StyledAppPreviewWrapper>
      </StyledLandingContent>
    </StyledLanding>
  );
};

export default Landing;
