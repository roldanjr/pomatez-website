type FeatureList = {
  icon: string;
  heading: string;
  description: string;
};

type Edges = {
  node: {
    frontmatter: {
      title: string;
      subTitle?: string;
      featureList?: FeatureList[];
    };
  };
};

export type MarkDownProps = {
  allMarkdownRemark: {
    edges: Edges[];
  };
};
