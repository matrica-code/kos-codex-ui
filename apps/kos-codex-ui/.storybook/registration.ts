import {
  Application,
  CopyLogs,
  DDKModels,
  Door,
  FcmPump,
  LfcvPump,
  Lockout,
} from "@kosdev-code/kos-ddk-models";
import { Pump } from "@kosdev-code/kos-dispense-sdk";
import { Device, registerLegacyModel } from "@kosdev-code/kos-ui-sdk";

import { pumpTypeFactory } from "@kosdev-code/kos-ddk-model-components";
import {
  KosExtensionManager,
  KosModelRegistry,
} from "@kosdev-code/kos-freestyle-sdk";
import { initKosProvider } from "@kosdev-code/kos-ui-sdk";

import {
  Color,
  Counter,
  TroublesContainer,
  TeamContainer,
  UserContainer,
  Device as DeviceModel,
} from "@kos-codex/kos-codex-models";

KosModelRegistry.freestyle
  .models()
  .model(CopyLogs)
  .model(Device)
  .model(Door)
  .model(FcmPump)
  .model(LfcvPump)
  .model(Counter)
  .model(TeamContainer)
  .model(UserContainer)
  .model(TroublesContainer)
  .model(DeviceModel)
  .model(Color)
  .model(Lockout)
  .companion(Pump.type, pumpTypeFactory)
  .preload(Application.type);

Object.keys(DDKModels).forEach((key) => {
  const model = DDKModels[key];
  registerLegacyModel(KosModelRegistry)(key, model);
});

const ext = new KosExtensionManager();
ext.freestyle.initializeFreestyleExtension();

const { KosCoreContextProvider } = initKosProvider();

export { KosCoreContextProvider };
