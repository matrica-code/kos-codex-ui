import styled from "@emotion/styled";
import {
  kosComponent,
  KosLog,
  useKosTranslation,
} from "@kosdev-code/kos-ui-sdk";

const log = KosLog.createLogger({ name: "main-view" });
log.debug("main-view component loaded");

const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px;
  .logo {
    width: 300px;
  }
`;

export const MainView: React.FunctionComponent = kosComponent(() => {
  const { t } = useKosTranslation("lang-demo");
  return (
    <Main>
      <div className="logo">
        <img src="./assets/kos-logo.svg"></img>
      </div>
      <h1>{t("welcome", "Welcome to kOS!")}</h1>
      <h2>{t("mainView", "Main View")}</h2>
    </Main>
  );
});
