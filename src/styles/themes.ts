import { css } from "styled-components";

export const lightTheme = css`
  --color-primary: #0098f7;
  --color-primary-dark: #0078d6;

  --color-link: var(--color-primary-dark);

  --color-heading-text: #212121;
  --color-body-text: #666666;
  --color-disabled-text: #9e9e9e;

  --color-bg-primary: #fff;
  --color-bg-secondary: #fafafa;
  --color-bg-tertiary: #f2f2f2;

  --color-hero-gradient: linear-gradient(
    to bottom right,
    var(--color-bg-secondary),
    var(--color-bg-tertiary)
  );

  --color-button-normal: linear-gradient(
    to bottom right,
    var(--color-bg-secondary),
    var(--color-bg-primary)
  );

  --color-shadow-primary: rgba(0, 0, 0, 0.16);
  --color-shadow-secondary: rgba(0, 0, 0, 0.24);
`;

export const darkTheme = css`
  --color-primary: #0098f7;
  --color-primary-dark: #0078d6;

  --color-link: var(--color-primary);

  --color-heading-text: #e3e4e5;
  --color-body-text: #a7abae;
  --color-disabled-text: #6d7478;

  --color-bg-primary: #141e25;
  --color-bg-secondary: #1f2930;
  --color-bg-tertiary: #232d34;

  --color-hero-gradient: linear-gradient(to bottom right, #141c20, #12181b);

  --color-button-normal: linear-gradient(
    to bottom right,
    var(--color-bg-tertiary),
    var(--color-bg-secondary)
  );

  --color-shadow-primary: rgba(0, 0, 0, 0.24);
  --color-shadow-secondary: rgba(0, 0, 0, 0.4);
`;
