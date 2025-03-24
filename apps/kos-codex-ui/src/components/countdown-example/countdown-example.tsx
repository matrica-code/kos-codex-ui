import styled from "@emotion/styled";

import {
  getKosCompanionModel,
  kosComponent,
  KosLog,
} from "@kosdev-code/kos-ui-sdk";
import { withCounter } from "../../hooks";
import {
  Countdown,
  CountdownModel,
  CounterModel,
} from "@kos-codex/kos-codex-models";
import { Button } from "../button";

const log = KosLog.createLogger({ name: "countdown-example" });
log.debug("countdown-example component loaded");

const LayoutContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`;

interface Props {
  counter: CounterModel;
}

// extract-code CountdownExample
export const CountdownExample: React.FunctionComponent<Props> = kosComponent(
  ({ counter }) => {
    const countdown = getKosCompanionModel<CountdownModel>(
      counter,
      Countdown.type,
    );

    if (!countdown) return null;
    return (
      <LayoutContainer>
        Time Remaining: {countdown.timeRemaining}
        <Button type="button" onClick={countdown.reset}>
          Reset
        </Button>
      </LayoutContainer>
    );
  },
);

export default withCounter(CountdownExample);
