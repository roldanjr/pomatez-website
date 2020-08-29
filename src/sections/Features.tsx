import React, { useState, useContext } from "react";
import { useStaticQuery, graphql } from "gatsby";
import Image from "gatsby-image";
import {
	StyledFeatures,
	StyledFeatureList,
	StyledFeatureItem,
	StyledFeatureContent,
	StyledFeatureContainer,
	StyledFeaturedImageWrapper,
	StyledFeaturedImage,
} from "../styles";
import { Header } from "../components";
import { MarkDownProps, FluidImageProps } from "../types";
import { ThemeContext } from "../contexts";

type QueryProps = {
	configPreviewLight: FluidImageProps;
	configPreviewDark: FluidImageProps;
	tasksPreviewLight: FluidImageProps;
	tasksPreviewDark: FluidImageProps;
} & MarkDownProps;

const Features: React.FC = () => {
	const {
		allMarkdownRemark,
		tasksPreviewLight,
		tasksPreviewDark,
		configPreviewLight,
		configPreviewDark,
	} = useStaticQuery<QueryProps>(graphql`
		{
			allMarkdownRemark: allMarkdownRemark(
				filter: { fileAbsolutePath: { regex: "/features/" } }
			) {
				edges {
					node {
						frontmatter {
							title
							subTitle
							featureList {
								heading
								description
							}
						}
						html
					}
				}
			}
			tasksPreviewLight: file(relativePath: { eq: "tasks-light.PNG" }) {
				childImageSharp {
					fluid(maxWidth: 340, quality: 100) {
						...GatsbyImageSharpFluid_withWebp
						...GatsbyImageSharpFluidLimitPresentationSize
					}
				}
			}
			tasksPreviewDark: file(relativePath: { eq: "tasks-dark.PNG" }) {
				childImageSharp {
					fluid(maxWidth: 340, quality: 100) {
						...GatsbyImageSharpFluid_withWebp
						...GatsbyImageSharpFluidLimitPresentationSize
					}
				}
			}
			configPreviewLight: file(relativePath: { eq: "config-light.PNG" }) {
				childImageSharp {
					fluid(maxWidth: 340, quality: 100) {
						...GatsbyImageSharpFluid_withWebp
						...GatsbyImageSharpFluidLimitPresentationSize
					}
				}
			}
			configPreviewDark: file(relativePath: { eq: "config-dark.PNG" }) {
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

	const [limit, setLimit] = useState(3);

	const { node } = allMarkdownRemark.edges[0];

	const renderLastItem = () => {
		if (
			node.frontmatter.featureList &&
			node.frontmatter.featureList.length > limit
		) {
			return (
				<StyledFeatureItem
					onClick={() => {
						setLimit((prevLimit) => prevLimit + 3);
					}}
				>
					<h5>Show more...</h5>
				</StyledFeatureItem>
			);
		}
		return (
			<StyledFeatureItem>
				<h5>More features soon...</h5>
			</StyledFeatureItem>
		);
	};

	return (
		<StyledFeatures id="features">
			<StyledFeatureContent>
				<Header node={node} />

				<StyledFeatureContainer>
					<StyledFeaturedImageWrapper>
						<StyledFeaturedImage>
							<Image
								fluid={
									isDarkMode
										? tasksPreviewDark.childImageSharp.fluid
										: tasksPreviewLight.childImageSharp.fluid
								}
								alt="tasks preview"
							/>
						</StyledFeaturedImage>
						<StyledFeaturedImage>
							<Image
								fluid={
									isDarkMode
										? configPreviewDark.childImageSharp.fluid
										: configPreviewLight.childImageSharp.fluid
								}
								alt="config preview"
							/>
						</StyledFeaturedImage>
					</StyledFeaturedImageWrapper>

					<StyledFeatureList>
						{node.frontmatter.featureList
							?.map((feature, index) => (
								<StyledFeatureItem key={index}>
									<h5>{feature.heading}</h5>
									<p>{feature.description}</p>
								</StyledFeatureItem>
							))
							.slice(0, limit)}
						{renderLastItem()}
					</StyledFeatureList>
				</StyledFeatureContainer>
			</StyledFeatureContent>
		</StyledFeatures>
	);
};

export default Features;
