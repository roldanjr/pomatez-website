import styled from "styled-components";
import { SectionStyle, SectionContentStyle } from "../mixins";
import {
	StyledFeatureList,
	StyledFeatureItem,
	StyledFeatureContainer,
	StyledFeaturedImageWrapper,
	StyledFeaturedImage,
} from "./features";

export const StyledRoadmap = styled.section`
	${SectionStyle}
`;

export const StyledRoadmapContent = styled.div`
	${SectionContentStyle};
`;

export const StyledRoadmapImageWrapper = styled(StyledFeaturedImageWrapper)`
	/* display: flex;
	flex-direction: column;
	justify-self: end; */
`;

export const StyledRoadmapImage = styled(StyledFeaturedImage)`
	/* &:nth-child(1) {
		margin-left: -2rem;
	}

	&:nth-child(2) {
		margin-left: -20rem;
		margin-top: -20rem;
	}

	&:nth-child(3) {
		margin-top: -20rem;
		z-index: 30;
	} */
`;

export const StyledRoadmapContainer = styled(StyledFeatureContainer)``;

export const StyledRoadmapList = styled(StyledFeatureList)``;

export const StyledRoadmapItem = styled(StyledFeatureItem)``;
