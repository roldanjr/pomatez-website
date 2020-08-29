import React, { useState, useEffect, useContext } from "react";
import { useStaticQuery, graphql } from "gatsby";
import {
	StyledLanding,
	StyledWaterMarkLeft,
	StyledWaterMarkRight,
	StyledLandingCTAWrapper,
	StyledAppPreviewWrapper,
	StyledLandingContent,
	StyledCTADownloader,
	StyledLandingHeader,
	StyledLandingCtaWrapper,
	StyledGithubLink,
	StyledAppPreviewImage,
} from "../styles";
import { FluidImageProps, MarkDownProps } from "../types";
import { WINDOWS_INSTALLER, MAC_INSTALLER } from "../config";
import { OSTypes, detectOS } from "../utils";
import { ThemeContext } from "../contexts";
import { SVG } from "../components";

type QueryProps = {
	workTimePreviewLight: FluidImageProps;
	workTimePreviewDark: FluidImageProps;
	shortBreakPreviewLight: FluidImageProps;
	shortBreakPreviewDark: FluidImageProps;
	longBreakPreviewLight: FluidImageProps;
	longBreakPreviewDark: FluidImageProps;
	configPreviewLight: FluidImageProps;
	configPreviewDark: FluidImageProps;
	settingsPreviewLight: FluidImageProps;
	settingsPreviewDark: FluidImageProps;
	tasksPreviewLight: FluidImageProps;
	tasksPreviewDark: FluidImageProps;
} & MarkDownProps;

const Landing: React.FC = () => {
	const {
		allMarkdownRemark,
		workTimePreviewLight,
		workTimePreviewDark,
		shortBreakPreviewLight,
		shortBreakPreviewDark,
		longBreakPreviewLight,
		longBreakPreviewDark,
		configPreviewLight,
		configPreviewDark,
		settingsPreviewLight,
		settingsPreviewDark,
		tasksPreviewLight,
		tasksPreviewDark,
	} = useStaticQuery<QueryProps>(graphql`
		{
			allMarkdownRemark: allMarkdownRemark(
				filter: { fileAbsolutePath: { regex: "/landing/" } }
			) {
				edges {
					node {
						frontmatter {
							title
							subTitle
						}
					}
				}
			}
			workTimePreviewLight: file(relativePath: { eq: "work-time-light.PNG" }) {
				childImageSharp {
					fluid(maxWidth: 250, quality: 100) {
						...GatsbyImageSharpFluid_withWebp
						...GatsbyImageSharpFluidLimitPresentationSize
					}
				}
			}
			workTimePreviewDark: file(relativePath: { eq: "work-time-dark.PNG" }) {
				childImageSharp {
					fluid(maxWidth: 250, quality: 100) {
						...GatsbyImageSharpFluid_withWebp
						...GatsbyImageSharpFluidLimitPresentationSize
					}
				}
			}
			shortBreakPreviewLight: file(
				relativePath: { eq: "short-break-light.PNG" }
			) {
				childImageSharp {
					fluid(maxWidth: 220, quality: 100) {
						...GatsbyImageSharpFluid_withWebp
						...GatsbyImageSharpFluidLimitPresentationSize
					}
				}
			}
			shortBreakPreviewDark: file(
				relativePath: { eq: "short-break-dark.PNG" }
			) {
				childImageSharp {
					fluid(maxWidth: 220, quality: 100) {
						...GatsbyImageSharpFluid_withWebp
						...GatsbyImageSharpFluidLimitPresentationSize
					}
				}
			}
			longBreakPreviewLight: file(
				relativePath: { eq: "long-break-light.PNG" }
			) {
				childImageSharp {
					fluid(maxWidth: 200, quality: 100) {
						...GatsbyImageSharpFluid_withWebp
						...GatsbyImageSharpFluidLimitPresentationSize
					}
				}
			}
			longBreakPreviewDark: file(relativePath: { eq: "long-break-dark.PNG" }) {
				childImageSharp {
					fluid(maxWidth: 200, quality: 100) {
						...GatsbyImageSharpFluid_withWebp
						...GatsbyImageSharpFluidLimitPresentationSize
					}
				}
			}
			configPreviewLight: file(relativePath: { eq: "config-light.PNG" }) {
				childImageSharp {
					fluid(maxWidth: 250, quality: 100) {
						...GatsbyImageSharpFluid_withWebp
						...GatsbyImageSharpFluidLimitPresentationSize
					}
				}
			}
			configPreviewDark: file(relativePath: { eq: "config-dark.PNG" }) {
				childImageSharp {
					fluid(maxWidth: 250, quality: 100) {
						...GatsbyImageSharpFluid_withWebp
						...GatsbyImageSharpFluidLimitPresentationSize
					}
				}
			}
			settingsPreviewLight: file(relativePath: { eq: "settings-light.PNG" }) {
				childImageSharp {
					fluid(maxWidth: 220, quality: 100) {
						...GatsbyImageSharpFluid_withWebp
						...GatsbyImageSharpFluidLimitPresentationSize
					}
				}
			}
			settingsPreviewDark: file(relativePath: { eq: "settings-dark.PNG" }) {
				childImageSharp {
					fluid(maxWidth: 220, quality: 100) {
						...GatsbyImageSharpFluid_withWebp
						...GatsbyImageSharpFluidLimitPresentationSize
					}
				}
			}
			tasksPreviewLight: file(relativePath: { eq: "tasks-light.PNG" }) {
				childImageSharp {
					fluid(maxWidth: 200, quality: 100) {
						...GatsbyImageSharpFluid_withWebp
						...GatsbyImageSharpFluidLimitPresentationSize
					}
				}
			}
			tasksPreviewDark: file(relativePath: { eq: "tasks-dark.PNG" }) {
				childImageSharp {
					fluid(maxWidth: 200, quality: 100) {
						...GatsbyImageSharpFluid_withWebp
						...GatsbyImageSharpFluidLimitPresentationSize
					}
				}
			}
		}
	`);

	const { frontmatter } = allMarkdownRemark.edges[0].node;

	const [operatingSystem, setOperatingSystem] = useState<OSTypes>("Mobile");

	const { isDarkMode } = useContext(ThemeContext);

	useEffect(() => {
		const timeout = setTimeout(() => {
			setOperatingSystem(detectOS());
		}, 1000);

		return () => clearTimeout(timeout);
	}, []);

	const renderDownloadButton = () => {
		switch (operatingSystem) {
			case "Windows":
				return (
					<StyledCTADownloader as={"a"} href={WINDOWS_INSTALLER}>
						<SVG name="windows" />
						for Windows
					</StyledCTADownloader>
				);
			case "MacOS":
				return (
					<StyledCTADownloader as={"a"} href={MAC_INSTALLER}>
						<SVG name="apple" />
						for Mac OS
					</StyledCTADownloader>
				);
			case "Linux":
				return (
					<StyledCTADownloader
						href="/"
						to="download-now"
						offset={-24}
						duration={420}
						smooth
					>
						<SVG name="tux" />
						for Linux OS
					</StyledCTADownloader>
				);
			default:
				return (
					<StyledCTADownloader
						href="/"
						to="download-now"
						offset={-24}
						duration={420}
						smooth
					>
						<SVG name="download" />
						See Installers
					</StyledCTADownloader>
				);
		}
	};

	return (
		<StyledLanding id="landing">
			<StyledLandingContent>
				<StyledWaterMarkLeft />
				<StyledWaterMarkRight />

				<StyledLandingCTAWrapper>
					<StyledLandingHeader>
						<h1>{frontmatter.title}</h1>
						<h2>{frontmatter.subTitle}</h2>
					</StyledLandingHeader>

					<StyledLandingCtaWrapper>
						{renderDownloadButton()}
						<StyledGithubLink
							as={"a"}
							href="https://github.com/roldanjr/pomatez"
							target="_blank"
							rel="noopener noreferrer"
						>
							<SVG name="github" />
							GitHub Repo
						</StyledGithubLink>
					</StyledLandingCtaWrapper>
				</StyledLandingCTAWrapper>

				<StyledAppPreviewWrapper>
					<StyledAppPreviewImage
						fluid={
							isDarkMode
								? tasksPreviewDark.childImageSharp.fluid
								: tasksPreviewLight.childImageSharp.fluid
						}
						alt="tasks preview"
					/>
					<StyledAppPreviewImage
						fluid={
							isDarkMode
								? settingsPreviewDark.childImageSharp.fluid
								: settingsPreviewLight.childImageSharp.fluid
						}
						alt="settings preview"
					/>
					<StyledAppPreviewImage
						fluid={
							isDarkMode
								? configPreviewDark.childImageSharp.fluid
								: configPreviewLight.childImageSharp.fluid
						}
						alt="config preview"
					/>
					<StyledAppPreviewImage
						fluid={
							isDarkMode
								? workTimePreviewDark.childImageSharp.fluid
								: workTimePreviewLight.childImageSharp.fluid
						}
						alt="work time preview"
					/>
					<StyledAppPreviewImage
						fluid={
							isDarkMode
								? shortBreakPreviewDark.childImageSharp.fluid
								: shortBreakPreviewLight.childImageSharp.fluid
						}
						alt="short break preview"
					/>
					<StyledAppPreviewImage
						fluid={
							isDarkMode
								? longBreakPreviewDark.childImageSharp.fluid
								: longBreakPreviewLight.childImageSharp.fluid
						}
						alt="long break preview"
					/>
				</StyledAppPreviewWrapper>
			</StyledLandingContent>
		</StyledLanding>
	);
};

export default Landing;
