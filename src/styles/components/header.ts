import styled from "styled-components";
import media from "../media";

export const StyledHeader = styled.header`
	text-align: center;
	max-width: 60rem;

	margin: 0 auto;

	display: grid;
	row-gap: 2rem;
	align-content: start;

	position: relative;

	&::before {
		counter-increment: header;
		content: "0" counter(header) ".";
		color: var(--cl-disabled-text);
		font-size: 3.2rem;
		font-weight: 700;
		opacity: 0.1;
	}

	& > h3,
	& > h1 {
		font-size: 3.2rem;
		font-weight: 700;

		position: relative;

		& > span {
			position: absolute;
			top: 0;
			left: 50%;
			transform: translateX(-50%);
			z-index: -1;
			opacity: 0;
		}

		&::before {
			content: attr(data-after);
			background: linear-gradient(
				to bottom,
				var(--cl-primary),
				var(--cl-primary-variant)
			);
			background-clip: text;
			-webkit-background-clip: text;
			-webkit-text-fill-color: transparent;
		}

		&::after {
			content: attr(data-after);
			position: absolute;
			color: var(--cl-disabled-text);
			opacity: 0.04;
			font-size: 20rem;
			top: -2rem;
			left: 50%;
			transform: translateX(-50%);

			${media.tabletLg} {
				font-size: 16rem;
			}

			${media.tabletMd} {
				display: none;
			}
		}
	}

	& > h4,
	& > h2 {
		font-size: 6.4rem;
		font-weight: 700;
		color: var(--cl-display-text);
		z-index: 1;

		${media.mobileXl} {
			font-size: 5.6rem;
		}

		${media.mobileLg} {
			font-size: 5.2rem;
		}

		${media.mobileSm} {
			font-size: 4.8rem;
		}

		${media.mobileXs} {
			font-size: 4rem;
		}
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
