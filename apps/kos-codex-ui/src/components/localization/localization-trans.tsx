import styled from "@emotion/styled";

import {
  kosComponent,
  KosLog,
  Trans,
  useKosTranslation,
} from "@kosdev-code/kos-ui-sdk";

const log = KosLog.createLogger({ name: "localization" });
log.debug("localization component loaded");

const LocalizationContainer = styled.div`
  display: flex;
  height: 30px;
`;

// extract-code localization-trans
export const LocalizationTrans: React.FunctionComponent = kosComponent(() => {
  const { t } = useKosTranslation("kos-codex");
  return (
    <LocalizationContainer>
      <Trans
        t={t}
        i18nKey="example.link"
        components={{ link: <a href="https://kosdev.com" /> }}
        defaults="Click here to go to the <link>{{link}}</link>"
        values={{ link: "kOS homepage" }}
      />
    </LocalizationContainer>
  );
});

export default LocalizationTrans;
