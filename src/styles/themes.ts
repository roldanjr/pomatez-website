import { css } from "styled-components";

export const lightTheme = css`
  --color-primary: #0098f7;
  --color-primary-variant: #0078d6;

  --color-heading-text: #212121;
  --color-body-text: #666666;
  --color-disabled-text: #9e9e9e;

  --color-bg-primary: #fff;
  --color-bg-secondary: #fafafa;
  --color-bg-tertiary: #f2f2f2;

  --color-section-gradient-1: linear-gradient(
    to bottom right,
    var(--color-bg-secondary),
    var(--color-bg-tertiary)
  );

  --color-bg-button-normal: linear-gradient(
    to bottom right,
    var(--color-bg-secondary),
    var(--color-bg-primary)
  );

  --color-bg-button-normal-hover: linear-gradient(
    to bottom right,
    var(--color-bg-primary),
    var(--color-bg-primary)
  );

  --color-bg-button-primary: linear-gradient(
    to bottom right,
    var(--color-primary),
    var(--color-primary-variant)
  );

  --color-bg-button-primary-hover: linear-gradient(
    to bottom right,
    var(--color-primary),
    var(--color-primary)
  );

  --color-bg-footer: linear-gradient(
    to bottom,
    var(--color-bg-secondary),
    var(--color-bg-primary)
  );

  --color-border-primary: #e6e6e6;
  --color-border-secondary: #f4f4f4;

  --color-shadow-primary: rgba(0, 0, 0, 0.16);
  --color-shadow-secondary: rgba(0, 0, 0, 0.24);
`;

export const darkTheme = css`
  --color-primary: #0098f7;
  --color-primary-variant: #2ca7f8;

  --color-heading-text: #e3e4e5;
  --color-body-text: #a7abae;
  --color-disabled-text: #6d7478;

  --color-bg-primary: #141e25;
  --color-bg-secondary: #1f2930;
  --color-bg-tertiary: #232d34;

  --color-section-gradient-1: linear-gradient(
    to bottom right,
    #141c20,
    #12181b
  );

  --color-bg-button-normal: linear-gradient(
    to bottom right,
    var(--color-bg-tertiary),
    var(--color-bg-secondary)
  );

  --color-bg-button-normal-hover: linear-gradient(
    to bottom right,
    var(--color-bg-tertiary),
    var(--color-bg-tertiary)
  );

  --color-bg-button-primary: linear-gradient(
    to bottom right,
    var(--color-primary-variant),
    var(--color-primary)
  );

  --color-bg-button-primary-hover: linear-gradient(
    to bottom right,
    var(--color-primary-variant),
    var(--color-primary-variant)
  );

  --color-bg-footer: linear-gradient(
    to bottom,
    var(--color-bg-primary),
    #12181b
  );

  --color-border-primary: rgba(255, 255, 255, 0.16);
  --color-border-secondary: rgba(255, 255, 255, 0.1);

  --color-shadow-primary: rgba(0, 0, 0, 0.24);
  --color-shadow-secondary: rgba(0, 0, 0, 0.4);
`;
