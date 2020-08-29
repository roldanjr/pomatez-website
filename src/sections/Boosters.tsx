import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { StyledBoosters, StyledFeatureContent } from "../styles";
import { MarkDownProps } from "../types";
import { Header } from "../components";

type Props = {};

const Boosters: React.FC<Props> = () => {
	const { allMarkdownRemark } = useStaticQuery<MarkDownProps>(graphql`
		{
			allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/boosters/" } }) {
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

	const { node } = allMarkdownRemark.edges[0];

	return (
		<StyledBoosters id="boosters">
			<StyledFeatureContent>
				<Header node={node} />
			</StyledFeatureContent>
		</StyledBoosters>
	);
};

export default Boosters;
