type FeatureList = {
  icon: string;
  heading: string;
  description: string;
};

type StepList = {
  heading: string;
  description: string;
};

type Edges = {
  node: {
    frontmatter: {
      title: string;
      subTitle?: string;
      featureList?: FeatureList[];
      stepList?: StepList[];
    };
  };
};

export type MarkDownProps = {
  allMarkdownRemark: {
    edges: Edges[];
  };
};
