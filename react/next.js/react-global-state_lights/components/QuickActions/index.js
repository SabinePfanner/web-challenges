import styled from "styled-components";
import Button from "../Button";
import Lights from "../Lights";

const StyledQuickActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export default function QuickActions({ onLightsOn, onLightsOff }) {
  return (
    <StyledQuickActions>
      <Button type="button" onClick={() => onLightsOn(isOn)}>
        Turn all lights off
      </Button>
      <Button type="button" onClick={() => onLightsOff(isOn)}>
        Turn all lights on
      </Button>
    </StyledQuickActions>
  );
}
