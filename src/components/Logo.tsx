import React from "react";
import Image, { FixedObject } from "gatsby-image";
import { StyledNavLogo } from "styles";

type Props = {
  name: string;
  src: FixedObject | FixedObject[] | undefined;
};

const Logo: React.FC<Props> = ({ name, src }) => {
  return (
    <StyledNavLogo to="/">
      <Image fixed={src} />
      <label>{name}</label>
    </StyledNavLogo>
  );
};

export default React.memo(Logo);
