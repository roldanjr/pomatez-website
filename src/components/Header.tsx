import React from "react";
import { StyledHeader } from "../styles";
import { Frontmatter } from "../types";

type Props = {
  frontMatter: Frontmatter;
};

const Header: React.FC<Props> = ({ frontMatter }) => {
  const { title, subTitle } = frontMatter;

  return (
    <StyledHeader>
      <h2>
        {title.split(" ").map((part, i) => {
          if (i !== 0) {
            return (
              <React.Fragment key={i}>
                &nbsp;
                {part}
              </React.Fragment>
            );
          }
          return <span key={i}>{part}</span>;
        })}
      </h2>
      <p>{subTitle}</p>
    </StyledHeader>
  );
};

export default Header;
