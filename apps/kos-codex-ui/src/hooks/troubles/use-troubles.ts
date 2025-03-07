import { useKosModel } from "@kosdev-code/kos-ui-sdk";
import { Troubles, TroublesModel } from "@kos-codex/kos-codex-models";

export const useTroubles = (id: string) => {
  const modelId = id;
  const result = useKosModel<TroublesModel>({
    modelId,
    modelType: Troubles.type,
    options: {},
  });

  return result;
};
