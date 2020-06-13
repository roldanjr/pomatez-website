import React from "react";
import {
  StyledLanding,
  StyledWaterMarkLeft,
  StyledWaterMarkRight,
  StyledLandingCTAWrapper,
  StyledAppPreviewWrapper,
  StyledLandingContent,
} from "styles";
import { useParallax } from "hooks";

import PreviewImages from "./PreviewImages";
import LandingCTA from "./LandingCTA";

const Landing: React.FC = () => {
  const offset = useParallax();

  return (
    <StyledLanding id="landing">
      <StyledLandingContent>
        <StyledWaterMarkLeft style={{ top: offset / 3 }} />
        <StyledWaterMarkRight style={{ top: offset / 3 }} />
        <StyledLandingCTAWrapper style={{ top: offset / 6 }}>
          <LandingCTA />
        </StyledLandingCTAWrapper>
        <StyledAppPreviewWrapper style={{ top: offset / 6 }}>
          <PreviewImages />
        </StyledAppPreviewWrapper>
      </StyledLandingContent>
    </StyledLanding>
  );
};

export default Landing;
