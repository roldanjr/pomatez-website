type FeatureList = {
  icon: string;
  heading: string;
  description: string;
};

type StepList = {
  heading: string;
  description: string;
};

export type Frontmatter = {
  title: string;
  subTitle?: string;
  featureList?: FeatureList[];
  stepList?: StepList[];
};

type Edges = {
  node: {
    frontmatter: Frontmatter;
  };
};

export type MarkDownProps = {
  allMarkdownRemark: {
    edges: Edges[];
  };
};
