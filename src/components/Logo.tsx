import React from "react";
import { StyledNavLogo } from "../styles";
import SVG from "./SVG";

type Props = {
	name: string;
};

export const Logo: React.FC<Props> = ({ name }) => {
	return (
		<StyledNavLogo href="/" to="landing" offset={-56} duration={420} smooth>
			<SVG name="pomatez" />
			<label>{name}</label>
		</StyledNavLogo>
	);
};

export default Logo;
