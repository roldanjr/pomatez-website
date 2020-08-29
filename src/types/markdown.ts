type FeatureList = {
	heading: string;
	description: string;
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
	featureList?: FeatureList[];
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
