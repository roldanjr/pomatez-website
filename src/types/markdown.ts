import { FixedImageProps } from "./image";

type FeatureList = {
	heading: string;
	description: string;
};

type BoosterList = {
	heading: string;
	description: string;
	link: string;
	image: FixedImageProps;
};

type StepList = {
	heading: string;
	description: string;
};

type Image = {
	childImageSharp: {
		resize: {
			src: string;
			width: number;
			height: number;
		};
	};
};

export type Frontmatter = {
	title: string;
	subTitle?: string;
	features?: FeatureList[];
	boosters?: BoosterList[];
	stepList?: StepList[];
	screenShot: Image;
};

export type Edges = {
	node: {
		frontmatter: Frontmatter;
		html: string;
	};
};

export type MarkDownProps = {
	allMarkdownRemark: {
		edges: Edges[];
	};
};
