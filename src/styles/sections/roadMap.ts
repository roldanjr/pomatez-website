import styled from "styled-components";
import { SectionStyle, SectionContentStyle } from "../mixins";
import { StyledFeatureList, StyledFeatureItem } from "./features";

export const StyledRoadMap = styled.section`
	${SectionStyle}
`;

export const StyledRoadMapContent = styled.div`
	${SectionContentStyle};
`;

export const StyledRoadMapList = styled(StyledFeatureList)`
	grid-template-columns: repeat(2, 1fr);
	column-gap: 4rem;
	row-gap: 4rem;

	max-width: max-content;
	margin: auto;
`;

export const StyledRoadMapItem = styled(StyledFeatureItem)`
	border: 1px solid var(--border-secondary);
	max-width: 40rem;
	padding: 2rem 2.4rem;

	&:hover {
		border-color: var(--cl-primary-variant);
		box-shadow: 0 0 0 3px var(--cl-primary-variant);
	}
`;
