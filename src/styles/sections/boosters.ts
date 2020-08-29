import styled, { css } from "styled-components";
import { SectionStyle, SectionContentStyle } from "../mixins";
import media from "../media";

export const StyledBoosters = styled.section`
	${SectionStyle};
`;

export const StyledBoosterContent = styled.div`
	${SectionContentStyle};
`;

export const StyledBoosterList = styled.ul`
	list-style: none;

	display: grid;
	align-content: start;
	justify-content: center;
	grid-template-columns: repeat(3, 1fr);
	gap: 6rem;

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

const BoosterItemStyle = css`
	height: 100%;

	text-align: center;

	display: grid;
	align-content: start;
	row-gap: 1.2rem;
	padding: 4rem;

	color: var(--cl-display-text);

	border-radius: 3px;
	border: 1px solid var(--border-secondary);
	background: var(--bg-secondary);
	box-shadow: 0 0 0 0 var(--cl-primary-variant);
	transition: all 200ms ease;

	${media.laptopSm} {
		row-gap: 0.8rem;
		padding: 2.4rem;
		padding-bottom: 3.2rem;
	}

	&:hover {
		color: var(--cl-primary-variant);
		border-color: var(--cl-primary-variant);
		background-color: var(--bg-primary);
		box-shadow: 0 0 0 3px var(--cl-primary-variant);
	}

	&:last-of-type {
		cursor: pointer;
		height: max-content;
	}

	& > h3 {
		font-size: 2rem;
		font-weight: 500;

		display: flex;
		flex-direction: column;
		align-items: center;

		color: currentColor;

		& > svg {
			width: 1.75em;
			height: 1.75em;
			fill: currentColor;

			margin-bottom: 0.8rem;
		}
	}

	& > p {
		color: var(--cl-body-text);
	}
`;

export const StyledBoosterItem = styled.li`
	${BoosterItemStyle};
`;
