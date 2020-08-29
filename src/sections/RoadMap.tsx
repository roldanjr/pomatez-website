import React, { useState } from "react";
import { useStaticQuery, graphql } from "gatsby";
import {
	StyledRoadMap,
	StyledRoadMapList,
	StyledRoadMapItem,
	StyledRoadMapContent,
} from "../styles";
import { Header } from "../components";
import { MarkDownProps } from "../types";

const RoadMap: React.FC = () => {
	const { allMarkdownRemark } = useStaticQuery<MarkDownProps>(graphql`
		{
			allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/roadmap/" } }) {
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

	const [limit, setLimit] = useState(6);

	const { node } = allMarkdownRemark.edges[0];

	const renderLastItem = () => {
		if (
			node.frontmatter.featureList &&
			node.frontmatter.featureList.length > limit
		) {
			return (
				<StyledRoadMapItem
					onClick={() => {
						setLimit((prevLimit) => prevLimit + 6);
					}}
				>
					<h5>Show more...</h5>
				</StyledRoadMapItem>
			);
		}
	};

	return (
		<StyledRoadMap id="roadmap">
			<StyledRoadMapContent>
				<Header node={node} />

				<StyledRoadMapList>
					{node.frontmatter.featureList
						?.map((feature, index) => (
							<StyledRoadMapItem key={index}>
								<h5>{feature.heading}</h5>
								<p>{feature.description}</p>
							</StyledRoadMapItem>
						))
						.splice(0, limit)}
					{renderLastItem()}
				</StyledRoadMapList>
			</StyledRoadMapContent>
		</StyledRoadMap>
	);
};

export default RoadMap;
