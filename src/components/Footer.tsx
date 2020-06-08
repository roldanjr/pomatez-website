import React from "react";

type Props = {};

const Footer: React.FC<Props> = () => {
  return (
    <footer>
      © {new Date().getFullYear()}, Built with
      {` `}
      <a href="https://www.gatsbyjs.org">Gatsby</a>
    </footer>
  );
};

export default React.memo(Footer);
