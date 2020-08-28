import React, { useState } from "react";
import { useStaticQuery, graphql } from "gatsby";
import LazyLoad from "react-lazyload";
import {
	StyledFeatures,
	StyledFeatureList,
	StyledFeatureItem,
	StyledShowMore,
	StyledFeatureContent,
} from "../styles";
import { SVG, Header } from "../components";
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
								icon
								heading
								description
							}
						}
					}
				}
			}
		}
	`);

	const [limit, setLimit] = useState(5);

	const { frontmatter } = allMarkdownRemark.edges[0].node;

	const renderLastItem = () => {
		if (frontmatter.featureList && frontmatter.featureList.length > limit) {
			return (
				<StyledFeatureItem
					onClick={() => {
						setLimit((prevLimit) => prevLimit + 6);
					}}
				>
					<h3>
						<SVG name="more" />
						Show more...
					</h3>
				</StyledFeatureItem>
			);
		}
		return (
			<StyledFeatureItem>
				<h3>
					<SVG name="more" />
					More of it soon...
				</h3>
			</StyledFeatureItem>
		);
	};

	return (
		<StyledFeatures id="app-features">
			<LazyLoad once={true} offset={80} height="72.7rem">
				<StyledFeatureContent>
					<Header frontMatter={frontmatter} />

					<StyledFeatureList>
						{frontmatter.featureList
							?.map((feature, index) => (
								<StyledFeatureItem key={index}>
									<h3>
										<SVG name={feature.icon} />
										{feature.heading}
									</h3>
									<p>{feature.description}</p>
								</StyledFeatureItem>
							))
							.slice(0, limit)}
						{renderLastItem()}
					</StyledFeatureList>
				</StyledFeatureContent>
			</LazyLoad>
		</StyledFeatures>
	);
};

export default Features;
