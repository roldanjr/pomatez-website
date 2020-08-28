import React from "react";
import PomatezSVG from "../assets/icons/pomatez.svg";
import DownloadSVG from "../assets/icons/download.svg";
import SunnySVG from "../assets/icons/sunny.svg";
import MoonSVG from "../assets/icons/moon.svg";
import GithubSVG from "../assets/icons/github.svg";
import WindowSVG from "../assets/icons/windows.svg";
import CopySVG from "../assets/icons/copy.svg";
import FoodSVG from "../assets/icons/food.svg";
import LaptopSVG from "../assets/icons/laptop.svg";
import AlertSVG from "../assets/icons/alert.svg";
import MoonOutlineSVG from "../assets/icons/moon-outline.svg";
import TimerSVG from "../assets/icons/timer.svg";
import NotificationSVG from "../assets/icons/notification.svg";
import KeypadSVG from "../assets/icons/keypad.svg";
import CogSVG from "../assets/icons/cog.svg";
import CreateSVG from "../assets/icons/create.svg";
import MoreSVG from "../assets/icons/more.svg";
import BrowserSVG from "../assets/icons/browser.svg";
import CloudSVG from "../assets/icons/cloud.svg";
import BarChartSVG from "../assets/icons/bar-chart.svg";
import AppleSVG from "../assets/icons/apple.svg";
import LinuxSVG from "../assets/icons/linux.svg";
import SnapStoreSVG from "../assets/icons/snap-store.svg";
import TuxSVG from "../assets/icons/tux.svg";
import ArrowBackSVG from "../assets/icons/arrow-back.svg";
import AutoUpdateSVG from "../assets/icons/auto-update.svg";
import ExitSVG from "../assets/icons/exit.svg";
import RepeatSVG from "../assets/icons/repeat.svg";
import RemoveSVG from "../assets/icons/remove.svg";
import EllipseSVG from "../assets/icons/ellipse.svg";
import MicSVG from "../assets/icons/mic.svg";
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
		case "copy":
			return <CopySVG />;
		case "food":
			return <FoodSVG />;
		case "laptop":
			return <LaptopSVG />;
		case "alert":
			return <AlertSVG />;
		case "moon-outline":
			return <MoonOutlineSVG />;
		case "timer":
			return <TimerSVG />;
		case "notification":
			return <NotificationSVG />;
		case "keypad":
			return <KeypadSVG />;
		case "cog":
			return <CogSVG />;
		case "create":
			return <CreateSVG />;
		case "more":
			return <MoreSVG />;
		case "browser":
			return <BrowserSVG />;
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
		case "auto-update":
			return <AutoUpdateSVG />;
		case "exit":
			return <ExitSVG />;
		case "repeat":
			return <RepeatSVG />;
		case "remove":
			return <RemoveSVG />;
		case "ellipse":
			return <EllipseSVG />;
		case "mic":
			return <MicSVG />;
		case "time":
			return <TimeSVG />;
		default:
			return <PomatezSVG />;
	}
};

export default React.memo(SVG);
