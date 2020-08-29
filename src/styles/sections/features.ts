import styled, { css } from "styled-components";
import { Link } from "react-scroll";
import { SectionStyle, SectionContentStyle } from "../mixins";
import media from "../media";

export const StyledFeatures = styled.section`
	${SectionStyle};
`;

export const StyledFeatureContent = styled.div`
	${SectionContentStyle};
`;

export const StyledFeatureContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	column-gap: 2rem;
`;

export const StyledFeaturedImage = styled.div``;

export const StyledFeatureList = styled.ul`
	list-style: none;

	max-width: 40rem;

	display: grid;
	align-content: start;
	justify-content: center;
	gap: 4rem;

	${media.laptopMd} {
		gap: 4rem;
	}

	${media.laptopSm} {
		gap: 3.2rem;
	}

	${media.tabletXl} {
		grid-template-columns: repeat(2, 1fr);
	}

	${media.tabletMd} {
		grid-template-columns: 1fr;
	}
`;

const FeatureItemStyle = css`
	position: relative;
	height: 100%;

	display: grid;
	align-content: start;
	row-gap: 1.2rem;
	/* padding: 4rem; */

	color: var(--cl-display-text);

	border-radius: 3px;
	/* border: 1px solid var(--border-primary); */
	box-shadow: 0 0 0 0 var(--cl-primary-variant);
	transition: all 200ms ease;

	${media.laptopSm} {
		row-gap: 0.8rem;
		padding: 2.4rem;
		padding-bottom: 3.2rem;
	}

	&:hover {
		color: var(--cl-primary-variant);
		/* border-color: var(--cl-primary-variant);
		background-color: var(--bg-primary);
		box-shadow: 0 0 0 3px var(--cl-primary-variant); */
	}

	&:last-of-type {
		cursor: pointer;
		height: max-content;
	}

	& > svg {
		width: 8rem;
		height: 8rem;
		color: var(--cl-disabled-text);
		fill: currentColor;
		opacity: 0.08;

		position: absolute;
	}

	& > h5 {
		font-size: 2.4rem;
		font-weight: 700;

		display: flex;
		flex-direction: column;
		/* align-items: center; */

		color: currentColor;
		z-index: 1;
	}

	& > p {
		color: var(--cl-body-text);
		z-index: 1;
	}
`;

export const StyledFeatureItem = styled.li`
	${FeatureItemStyle};
`;

export const StyledShowMore = styled(Link)`
	${FeatureItemStyle};
`;
