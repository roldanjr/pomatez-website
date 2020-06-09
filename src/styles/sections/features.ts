import styled from "styled-components";
import { SectionStyle } from "styles/mixins";

export const StyledFeatures = styled.section`
  ${SectionStyle};

  position: relative;
  overflow: hidden;

  width: 100%;
  height: calc(100vh - 5.6rem);

  background: var(--color-bg-primary);
  box-shadow: 0 3px 6px 0 var(--color-shadow-primary);
`;
