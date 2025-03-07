import styled from "@emotion/styled";

import { kosComponent, KosLog } from "@kosdev-code/kos-ui-sdk";
import { useTroublesContainer } from "../../hooks";

const log = KosLog.createLogger({ name: "troubles-list" });
log.debug("troubles-list component loaded");

const TroublesListContainer = styled.div`
  display: flex;
  flex-flow: column;
  gap: 10px;
`;

const TroublesListHeader = styled.h4`
  margin: 0;
  margin-bottom: 10px;
`;

// extract-code TroublesList
export const TroublesList: React.FunctionComponent = kosComponent(() => {
  const { model } = useTroublesContainer();
  return (
    <TroublesListContainer>
      <TroublesListHeader>List of Available Troubles</TroublesListHeader>
      {model?.data.map((troubles) => (
        <div key={troubles.id}>
          Path: {troubles.boardPath || "none"} - Type: {troubles.type}
        </div>
      ))}
    </TroublesListContainer>
  );
});

export default TroublesList;
