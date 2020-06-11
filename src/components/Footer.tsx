import React from "react";
import {
  StyledFooter,
  StyledFooterContent,
  StyledGithubLink,
  StyledFooterNote,
  StyledCopyrightText,
} from "styles";
import { SVG } from "components";

type Props = {};

const Footer: React.FC<Props> = () => {
  return (
    <StyledFooter>
      <StyledFooterContent>
        <StyledGithubLink href="https://github.com/roldanjrCodeArts9711/productivity-timer">
          <SVG name="github" />
        </StyledGithubLink>
        <StyledCopyrightText>
          PRODUCTIVITY TIMER © {new Date().getFullYear()}
        </StyledCopyrightText>
        <StyledFooterNote>
          Developed and Maintained by&nbsp;
          <a href="https://github.com/roldanjrCodeArts9711">
            Roldan Montilla Jr
          </a>
        </StyledFooterNote>
      </StyledFooterContent>
    </StyledFooter>
  );
};

export default React.memo(Footer);
