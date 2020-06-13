import React from "react";
import Image, { FluidObject } from "gatsby-image";
import { StyledNavLogo } from "styles";

type Props = {
  name: string;
  src: FluidObject | FluidObject[] | undefined;
};

const Logo: React.FC<Props> = ({ name, src }) => {
  return (
    <StyledNavLogo href="/" to="landing" offset={-56} duration={420} smooth>
      <Image fluid={src} alt="Productivity Timer Logo" />
      <label>{name}</label>
    </StyledNavLogo>
  );
};

export default Logo;
