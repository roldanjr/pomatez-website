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

type EdgesProps = {
	node: {
		resize: {
			src: string;
		};
	};
};

export type AllImageSharpProps = {
	allImageSharp: {
		edges: EdgesProps[];
	};
};
