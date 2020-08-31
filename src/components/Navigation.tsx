import React, { useContext, useRef, useState, useLayoutEffect } from "react";
import {
	StyledNav,
	StyledNavLinks,
	StyledNavThemeToggler,
	StyledNavButtonWrapper,
	StyledNavLinkAnchor,
	StyledNavDownloadButton,
	StyledNavContent,
	StyledNavAsideWrapper,
	StyledNavMenu,
	StyledSideNavDimmer,
	StyledBackButton,
} from "../styles";
import { ThemeContext } from "../contexts";
import { navLinks, APP_NAME } from "../config";
import { useTargetOutside } from "../hooks";

import Logo from "./Logo";
import SVG from "./SVG";

export const Navigation: React.FC = () => {
	const { isDarkMode, themeToggler } = useContext(ThemeContext);

	const asideRef = useRef<HTMLDivElement>(null);

	const [showSidebar, setShowSidebar] = useTargetOutside({
		ref: asideRef,
	});

	const [isHome, setHome] = useState(false);

	useLayoutEffect(() => {
		setHome(window.location.pathname === "/");
	}, []);

	const hideSidebarAction = () => {
		setShowSidebar(false);
	};

	const renderNavLinks = () => {
		return navLinks.map((nav, index) => {
			if (nav.offset) {
				return (
					<li key={index}>
						<StyledNavLinkAnchor
							onClick={hideSidebarAction}
							href="/"
							to={nav.link}
							offset={nav.offset}
							duration={420}
							smooth
						>
							{nav.label}
						</StyledNavLinkAnchor>
					</li>
				);
			}
			return (
				<li key={index}>
					<a href={nav.link} target="_blank" rel="noopener noreferrer">
						{nav.label}
					</a>
				</li>
			);
		});
	};

	return (
		<StyledNav>
			<StyledNavContent>
				<Logo name={APP_NAME} isHome={isHome} />

				<StyledSideNavDimmer showSidebar={showSidebar} />

				<StyledNavAsideWrapper showSidebar={showSidebar} ref={asideRef}>
					{isHome && <StyledNavLinks>{renderNavLinks()}</StyledNavLinks>}

					<StyledNavButtonWrapper>
						<StyledNavThemeToggler onClick={themeToggler}>
							Mode
							<SVG name={isDarkMode ? "moon" : "sunny"} />
						</StyledNavThemeToggler>

						{isHome ? (
							<StyledNavDownloadButton
								href="/"
								to="installers"
								offset={-24}
								duration={420}
								smooth
								onClick={hideSidebarAction}
							>
								<SVG name="download" />
								See Installers
							</StyledNavDownloadButton>
						) : (
							<StyledBackButton
								onClick={() => {
									window.history.back();
								}}
							>
								<SVG name="arrow-back" />
								Back
							</StyledBackButton>
						)}
					</StyledNavButtonWrapper>
				</StyledNavAsideWrapper>

				<StyledNavMenu
					showSidebar={showSidebar}
					onClick={() => {
						setShowSidebar((prevState: boolean) => !prevState);
					}}
				>
					<span>&nbsp;</span>
					<span>&nbsp;</span>
					<span>&nbsp;</span>
				</StyledNavMenu>
			</StyledNavContent>
		</StyledNav>
	);
};

export default React.memo(Navigation);
