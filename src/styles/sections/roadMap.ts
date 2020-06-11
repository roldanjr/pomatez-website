import styled from "styled-components";
import { SectionStyle } from "styles/mixins";
import { StyledFeatureList, StyledFeatureItem } from "./features";

export const StyledRoadMap = styled.section`
  ${SectionStyle}
  background: var(--color-bg-primary);
  box-shadow: 0 1px 4px -1px var(--color-shadow-primary);
`;

export const StyledRoadMapList = styled(StyledFeatureList)`
  column-gap: 6rem;
  row-gap: 6rem;
`;

export const StyledRoadMapItem = styled(StyledFeatureItem)`
  border: 1px solid var(--color-border-secondary);
  background: var(--color-bg-secondary);

  &:hover {
    border-color: var(--color-primary-variant);
    box-shadow: 0 0 0 3px var(--color-primary-variant);
  }
`;
