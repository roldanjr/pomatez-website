type Edges = {
  node: {
    frontmatter: {
      title: string;
      sub_title?: string;
    };
  };
};

export type MarkDownProps = {
  allMarkdownRemark: {
    edges: Edges[];
  };
};
