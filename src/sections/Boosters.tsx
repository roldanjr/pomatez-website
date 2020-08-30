import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Image from "gatsby-image";
import {
	StyledBoosters,
	StyledFeatureContent,
	StyledBoosterList,
	StyledBoosterItem,
	StyledBoosterImage,
	StyledBoosterDescription,
	StyledCompanyWrapper,
} from "../styles";
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
							boosters {
								heading
								description
								link
								image {
									childImageSharp {
										fixed(width: 280, height: 280) {
											...GatsbyImageSharpFixed_withWebp
										}
									}
								}
							}
							headline
							companies {
								name
								logo {
									childImageSharp {
										original {
											src
										}
									}
								}
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

				<StyledBoosterList>
					{node.frontmatter.boosters?.map((booster, index) => (
						<StyledBoosterItem key={index}>
							<StyledBoosterImage>
								<Image
									fixed={booster.image.childImageSharp.fixed}
									alt={booster.heading}
								/>
							</StyledBoosterImage>
							<StyledBoosterDescription>
								<h5>{booster.heading}</h5>
								<p>{booster.description}</p>
								<a
									href={booster.link}
									rel="noopener noreferrer"
									target="_blank"
								>
									See Details
								</a>
							</StyledBoosterDescription>
						</StyledBoosterItem>
					))}
				</StyledBoosterList>

				<StyledCompanyWrapper>
					<h6>{node.frontmatter.headline}</h6>

					<div>
						{node.frontmatter.companies?.map((company, index) => (
							<img
								key={index}
								src={company.logo.childImageSharp.original.src}
								alt={company.name}
							/>
						))}
					</div>
				</StyledCompanyWrapper>
			</StyledFeatureContent>
		</StyledBoosters>
	);
};

export default Boosters;
