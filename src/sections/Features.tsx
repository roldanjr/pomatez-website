import React, { useState } from "react";
import { useStaticQuery, graphql } from "gatsby";
import {
	StyledFeatures,
	StyledFeatureList,
	StyledFeatureItem,
	StyledFeatureContent,
	StyledFeatureContainer,
	StyledFeaturedImage,
} from "../styles";
import { Header } from "../components";
import { MarkDownProps } from "../types";

const Features: React.FC = () => {
	const { allMarkdownRemark } = useStaticQuery<MarkDownProps>(graphql`
		{
			allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/features/" } }) {
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
		}
	`);

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
					<StyledFeaturedImage></StyledFeaturedImage>

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
