import { FixedObject, FluidObject } from "gatsby-image";

export type FixedImageProps = {
  childImageSharp: {
    fixed: FixedObject | FixedObject[] | undefined;
  };
};

export type FluidImageProps = {
  childImageSharp: {
    fluid: FluidObject | FluidObject[] | undefined;
  };
};
