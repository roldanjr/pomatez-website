import styled from "styled-components";

export const StyledHeader = styled.header`
	text-align: center;
	max-width: 60rem;

	margin: 0 auto;

	display: grid;
	row-gap: 2rem;
	align-content: start;

	& > h3 {
		font-size: 3.2rem;
		font-weight: 700;
		color: var(--cl-primary);

		position: relative;

		&::after {
			content: attr(data-after);
			position: absolute;
			color: var(--cl-disabled-text);
			opacity: 0.04;
			font-size: 20rem;
			top: -2rem;
			left: 50%;
			transform: translateX(-50%);
		}
	}

	& > h4 {
		font-size: 6.4rem;
		font-weight: 700;
		color: var(--cl-display-text);
		z-index: 1;
	}

	& > div {
		& > p {
			font-size: 2rem;
			color: var(--cl-body-text);
			line-height: 1.7;

			& > a:hover {
				color: var(--cl-primary);
			}
		}
	}
`;
