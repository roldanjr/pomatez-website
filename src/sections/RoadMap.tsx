import React, { useState, useContext } from "react";
import { useStaticQuery, graphql } from "gatsby";
import Image from "gatsby-image";
import {
	StyledRoadmap,
	StyledRoadmapList,
	StyledRoadmapItem,
	StyledRoadmapContent,
	StyledRoadmapContainer,
	StyledRoadmapImageWrapper,
	StyledRoadmapImage,
} from "../styles";
import { Header } from "../components";
import { LandingQueryProps } from "./Landing";
import { ThemeContext } from "../contexts";

const Roadmap: React.FC = () => {
	const {
		allMarkdownRemark,
		shortBreakPreviewLight,
		shortBreakPreviewDark,
		longBreakPreviewLight,
		longBreakPreviewDark,
	} = useStaticQuery<LandingQueryProps>(graphql`
		{
			allMarkdownRemark: allMarkdownRemark(
				filter: { fileAbsolutePath: { regex: "/roadmap/" } }
			) {
				edges {
					node {
						frontmatter {
							title
							subTitle
							features {
								heading
								description
							}
						}
						html
					}
				}
			}
			shortBreakPreviewLight: file(
				relativePath: { eq: "short-break-light.PNG" }
			) {
				childImageSharp {
					fluid(maxWidth: 340, quality: 100) {
						...GatsbyImageSharpFluid_withWebp
						...GatsbyImageSharpFluidLimitPresentationSize
					}
				}
			}
			shortBreakPreviewDark: file(
				relativePath: { eq: "short-break-dark.PNG" }
			) {
				childImageSharp {
					fluid(maxWidth: 340, quality: 100) {
						...GatsbyImageSharpFluid_withWebp
						...GatsbyImageSharpFluidLimitPresentationSize
					}
				}
			}
			longBreakPreviewLight: file(
				relativePath: { eq: "long-break-light.PNG" }
			) {
				childImageSharp {
					fluid(maxWidth: 340, quality: 100) {
						...GatsbyImageSharpFluid_withWebp
						...GatsbyImageSharpFluidLimitPresentationSize
					}
				}
			}
			longBreakPreviewDark: file(relativePath: { eq: "long-break-dark.PNG" }) {
				childImageSharp {
					fluid(maxWidth: 340, quality: 100) {
						...GatsbyImageSharpFluid_withWebp
						...GatsbyImageSharpFluidLimitPresentationSize
					}
				}
			}
		}
	`);

	const { isDarkMode } = useContext(ThemeContext);

	const [limit, setLimit] = useState(6);

	const { node } = allMarkdownRemark.edges[0];

	const renderLastItem = () => {
		if (node.frontmatter.features && node.frontmatter.features.length > limit) {
			return (
				<StyledRoadmapItem
					onClick={() => {
						setLimit((prevLimit) => prevLimit + 6);
					}}
				>
					<h5>Show more...</h5>
				</StyledRoadmapItem>
			);
		}
	};

	return (
		<StyledRoadmap id="roadmap">
			<StyledRoadmapContent>
				<Header node={node} />

				<StyledRoadmapContainer>
					<StyledRoadmapImageWrapper>
						<StyledRoadmapImage>
							<Image
								fluid={
									isDarkMode
										? shortBreakPreviewDark.childImageSharp.fluid
										: shortBreakPreviewLight.childImageSharp.fluid
								}
								alt="short break preview"
							/>
						</StyledRoadmapImage>
						<StyledRoadmapImage>
							<Image
								fluid={
									isDarkMode
										? longBreakPreviewDark.childImageSharp.fluid
										: longBreakPreviewLight.childImageSharp.fluid
								}
								alt="long break preview"
							/>
						</StyledRoadmapImage>
					</StyledRoadmapImageWrapper>

					<StyledRoadmapList>
						{node.frontmatter.features
							?.map((feature, index) => (
								<StyledRoadmapItem key={index}>
									<h5>{feature.heading}</h5>
									<p>{feature.description}</p>
								</StyledRoadmapItem>
							))
							.splice(0, limit)}
						{renderLastItem()}
					</StyledRoadmapList>
				</StyledRoadmapContainer>
			</StyledRoadmapContent>
		</StyledRoadmap>
	);
};

export default Roadmap;
