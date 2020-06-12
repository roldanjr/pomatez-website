import React from "react";
import {
  StyledLanding,
  StyledWaterMarkLeft,
  StyledWaterMarkRight,
  StyledLandingContent,
  StyledAppPreviewWrapper,
} from "styles";
import { useParallax } from "hooks";

import PreviewImages from "./PreviewImages";
import LandingCTA from "./LandingCTA";

const Landing: React.FC = () => {
  const offset = useParallax();

  return (
    <StyledLanding id="landing">
      <StyledWaterMarkLeft style={{ top: offset / 3 }} />
      <StyledWaterMarkRight style={{ top: offset / 3 }} />
      <StyledLandingContent style={{ top: offset / 6 }}>
        <LandingCTA />
      </StyledLandingContent>
      <StyledAppPreviewWrapper style={{ top: offset / 6 }}>
        <PreviewImages />
      </StyledAppPreviewWrapper>
    </StyledLanding>
  );
};

export default Landing;
