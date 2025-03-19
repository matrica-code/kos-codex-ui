import styled from "@emotion/styled";

import { kosComponent, KosLog } from "@kosdev-code/kos-ui-sdk";
import { withFutures } from "../../hooks";
import { FuturesModel } from "@kos-codex/kos-codex-models";
import { Button } from "../button";

const log = KosLog.createLogger({ name: "futures" });
log.debug("futures component loaded");

const FuturesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const ProgressBar = styled.div`
  width: 100%;
  height: 30px;
  background-color: #f1f1f1;
  border: 1px solid rgba(76, 175, 80, 0.5);
  position: relative;
  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: ${(props: { progress: number }) => props.progress}%;
    transition: width 1.5s;
    background-color: #4caf50;
  }
`;

interface Props {
  futures: FuturesModel;
}

// extract-code futures-component
export const Futures: React.FunctionComponent<Props> = kosComponent(
  ({ futures }: Props) => {
    return (
      <FuturesContainer>
        <Button
          onClick={() => futures.start()}
          disabled={futures.isInProgress}
          type="button"
        >
          {futures.isInProgress ? "In Progress" : "Start"}
        </Button>
        {futures.progress !== undefined ? (
          <ProgressBar progress={futures.progress} />
        ) : null}
        {futures.isComplete ? <div>Complete</div> : null}
      </FuturesContainer>
    );
  },
);

export default withFutures(Futures);
