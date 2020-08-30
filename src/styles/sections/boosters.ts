import styled from "styled-components";
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
	grid-template-columns: repeat(2, 1fr);
	justify-items: center;
	align-content: start;
	column-gap: 2rem;
	row-gap: 8rem;

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

export const StyledBoosterImage = styled.div`
	width: 28rem;
	height: 28rem;

	overflow: hidden;
	border-radius: 100rem;

	background-color: var(--bg-primary);
	box-shadow: 0 20px 40px var(--cl-shadow-primary);
	transition: all 320ms ease-out;
`;

export const StyledBoosterDescription = styled.div`
	display: grid;
	row-gap: 1.2rem;
	align-content: start;

	& > h5 {
		font-size: 2.4rem;
		font-weight: 700;
		color: currentColor;
	}

	& > p {
		color: var(--cl-body-text);
	}

	& > a {
		font-weight: 700;
		color: var(--cl-body-text);

		&:hover {
			color: var(--cl-primary-variant);
		}
	}
`;

export const StyledBoosterItem = styled.li`
	max-width: 60rem;
	height: 100%;

	display: grid;
	grid-template-columns: repeat(2, 1fr);
	column-gap: 4.8rem;
	align-items: center;
	justify-items: center;

	color: var(--cl-display-text);

	border-radius: 3px;
	transition: all 200ms ease;

	&:nth-child(odd) {
		${StyledBoosterImage} {
			grid-row: 1 / 2;
			grid-column: 2 / 3;
		}
		${StyledBoosterDescription} {
			grid-row: 1 / 2;
			grid-column: 1 / 2;
			text-align: end;
		}
	}

	${media.laptopSm} {
		row-gap: 0.8rem;
		padding: 2.4rem;
		padding-bottom: 3.2rem;
	}
`;

export const StyledCompanyImage = styled.div`
	width: 22.5rem;
	min-height: 7.1rem;
	margin-top: 2rem;
	overflow: hidden;
	background-color: white;
	opacity: var(--logo-opacity);
`;

export const StyledCompanyWrapper = styled.div`
	display: grid;
	justify-items: center;
	row-gap: 2rem;
	text-align: center;

	margin-top: 8rem;

	& > h6 {
		font-size: 2.4rem;
		font-weight: 400;

		max-width: 72rem;
	}

	& > div {
		max-width: 120rem;
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
	}
`;
