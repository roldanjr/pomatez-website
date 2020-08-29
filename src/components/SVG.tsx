import React from "react";
import PomatezSVG from "../assets/icons/pomatez.svg";
import DownloadSVG from "../assets/icons/download.svg";
import SunnySVG from "../assets/icons/sunny.svg";
import MoonSVG from "../assets/icons/moon.svg";
import GithubSVG from "../assets/icons/github.svg";
import WindowSVG from "../assets/icons/windows.svg";
import MoreSVG from "../assets/icons/more.svg";
import CloudSVG from "../assets/icons/cloud.svg";
import BarChartSVG from "../assets/icons/bar-chart.svg";
import AppleSVG from "../assets/icons/apple.svg";
import LinuxSVG from "../assets/icons/linux.svg";
import SnapStoreSVG from "../assets/icons/snap-store.svg";
import TuxSVG from "../assets/icons/tux.svg";
import ArrowBackSVG from "../assets/icons/arrow-back.svg";
import TimeSVG from "../assets/icons/time.svg";

type Props = {
	name?: string;
};

export const SVG: React.FC<Props> = ({ name }) => {
	switch (name) {
		case "pomatez":
			return <PomatezSVG />;
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
		case "more":
			return <MoreSVG />;
		case "cloud":
			return <CloudSVG />;
		case "bar-chart":
			return <BarChartSVG />;
		case "apple":
			return <AppleSVG />;
		case "linux":
			return <LinuxSVG />;
		case "snap-store":
			return <SnapStoreSVG />;
		case "tux":
			return <TuxSVG />;
		case "arrow-back":
			return <ArrowBackSVG />;
		case "time":
			return <TimeSVG />;
		default:
			return <PomatezSVG />;
	}
};

export default React.memo(SVG);
