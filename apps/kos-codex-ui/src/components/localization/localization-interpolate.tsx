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

// extract-code localization-interpolate
export const LocalizationInterpolate: React.FunctionComponent = kosComponent(
  () => {
    const { t } = useKosTranslation("kos-codex");
    return (
      <LocalizationContainer>
        {t("example.interpolation", {
          defaultValue: "Hello {{name}}",
          data: { name: "User" },
        })}
      </LocalizationContainer>
    );
  },
);

export default LocalizationInterpolate;
