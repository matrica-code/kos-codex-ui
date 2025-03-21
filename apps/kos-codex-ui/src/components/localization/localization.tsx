import styled from "@emotion/styled";

import {
  kosComponent,
  KosLog,
  useKosTranslation,
} from "@kosdev-code/kos-ui-sdk";

const log = KosLog.createLogger({ name: "localization" });
log.debug("localization component loaded");

const LocalizationContainer = styled.div`
  display: flex;
  height: 30px;
`;

// extract-code localization
export const Localization: React.FunctionComponent = kosComponent(() => {
  const { t } = useKosTranslation("kos-codex");
  return (
    <LocalizationContainer>
      {t("example.welcome", { defaultValue: "Welcome to the kOS codex" })}
    </LocalizationContainer>
  );
});

export default Localization;
