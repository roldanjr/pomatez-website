import styled from "styled-components";
import { SectionStyle, SectionContentStyle } from "../mixins";
import media from "../media";

export const StyledHowItWorks = styled.section`
	${SectionStyle}
	padding-bottom: 16rem;

	${media.laptopSm} {
		padding-bottom: 10rem;
	}
`;

export const StyledHowItWorkContent = styled.div`
	${SectionContentStyle};
`;

export const StyledHowItWorkStepList = styled.ol`
	list-style: none;
	counter-reset: step;

	display: grid;
	row-gap: 4rem;
	column-gap: 6rem;
	grid-template-rows: repeat(3, 1fr);
	grid-auto-flow: column;

	${media.laptopMd} {
		row-gap: 2.4rem;
		column-gap: 4rem;
	}

	${media.laptopSm} {
		row-gap: 2.4rem;
		column-gap: 3.2rem;
	}

	${media.tabletMd} {
		grid-template-rows: 1fr;
		grid-auto-flow: row;
	}
`;

export const StyledHowItWorkStep = styled.li`
	counter-increment: step;

	display: grid;
	row-gap: 0.8rem;

	width: 100%;
	height: max-content;

	& > h4 {
		font-size: 2.4rem;
		font-weight: 500;
		color: var(--cl-display-text);

		position: relative;

		&::before {
			content: "0" counter(step) ".";
			margin-right: 0.6rem;
			color: var(--cl-primary-variant);
		}

		&::after {
			content: "";
			display: block;
			width: 100%;
			height: 1px;
			background-color: var(--border-primary);
			margin-top: 1.2rem;
		}
	}
`;
