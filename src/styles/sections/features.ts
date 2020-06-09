import styled from "styled-components";
import { SectionStyle } from "styles/mixins";

export const StyledFeatures = styled.section`
  ${SectionStyle};

  position: relative;
  overflow: hidden;

  width: 100%;
  height: calc(100vh - 5.6rem);

  background: var(--color-bg-primary);

  border-top: 1px solid var(--color-border-primary);
`;
