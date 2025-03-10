import { useKosModel } from "@kosdev-code/kos-ui-sdk";
import { Configuration, ConfigurationModel } from "@kos-codex/kos-codex-models";

export const useConfiguration = () => {
  const modelId = Configuration.type;
  const result = useKosModel<ConfigurationModel>({
    modelId,
    modelType: Configuration.type,
    options: {},
  });

  return result;
};
