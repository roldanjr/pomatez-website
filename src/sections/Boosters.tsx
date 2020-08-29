import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import LazyLoad from "react-lazyload";

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
								icon
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
			<LazyLoad once={true} offset={80} height="72.7rem">
				<StyledFeatureContent>
					<Header node={node} />
				</StyledFeatureContent>
			</LazyLoad>
		</StyledBoosters>
	);
};

export default Boosters;
