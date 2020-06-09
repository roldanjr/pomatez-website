import React from "react";
import DownloadSVG from "assets/icons/download.svg";
import SunnySVG from "assets/icons/sunny.svg";
import MoonSVG from "assets/icons/moon.svg";
import GithubSVG from "assets/icons/github.svg";
import WindowSVG from "assets/icons/windows.svg";

type Props = {
  name: "download" | "sunny" | "moon" | "github" | "windows";
};

const SVG: React.FC<Props> = ({ name }) => {
  switch (name) {
    case "download":
      return <DownloadSVG />;
    case "sunny":
      return <SunnySVG />;
    case "moon":
      return <MoonSVG />;
    case "github":
      return <GithubSVG />;
    case "windows":
      return <WindowSVG />;
  }
};

export default React.memo(SVG);
