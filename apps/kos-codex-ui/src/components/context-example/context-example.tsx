import styled from "@emotion/styled";

import { kosComponent, KosLog } from "@kosdev-code/kos-ui-sdk";
import { useCounterContext } from "../../contexts";

const log = KosLog.createLogger({ name: "context-example" });
log.debug("context-example component loaded");

const ContextExampleContainer = styled.div``;

// extract-code provider-hook
export const ContextExample: React.FunctionComponent = kosComponent(() => {
  const { model } = useCounterContext();
  return <ContextExampleContainer>{model?.count}</ContextExampleContainer>;
});

export default ContextExample;
