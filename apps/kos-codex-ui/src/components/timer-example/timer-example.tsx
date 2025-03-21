import styled from "@emotion/styled";

import { kosComponent, KosLog } from "@kosdev-code/kos-ui-sdk";

const log = KosLog.createLogger({ name: "timer-example" });
log.debug("timer-example component loaded");

const TimerExampleContainer = styled.div``;

// extract-code TimerExample
export const TimerExample: React.FunctionComponent = kosComponent(() => {
  return <TimerExampleContainer>timer-example</TimerExampleContainer>;
});

export default TimerExample;
