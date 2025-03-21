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
  background-color: red;
  height: 30px;
`;

export const Localization: React.FunctionComponent = kosComponent(() => {
  const { t } = useKosTranslation("kos-codex");
  return <LocalizationContainer>hi {t("mainView")}</LocalizationContainer>;
});

export default Localization;
