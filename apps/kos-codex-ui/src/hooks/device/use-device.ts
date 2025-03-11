import { useKosModel } from "@kosdev-code/kos-ui-sdk";
import { Device, DeviceModel } from "@kos-codex/kos-codex-models";

export const useDevice = () => {
  const modelId = Device.type;
  const result = useKosModel<DeviceModel>({
    modelId,
    modelType: Device.type,
    options: {},
  });

  return result;
};
