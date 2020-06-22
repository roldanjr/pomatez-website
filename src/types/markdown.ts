type FeatureList = {
  icon: string;
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
  featuredImage: Image;
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
