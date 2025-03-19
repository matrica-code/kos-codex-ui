import { useKosModel } from "@kosdev-code/kos-ui-sdk";
import { Futures, FuturesModel } from "@kos-codex/kos-codex-models";

export const useFutures = (id: string) => {
  const modelId = id;
  const result = useKosModel<FuturesModel>({
    modelId,
    modelType: Futures.type,
    options: {},
  });

  return result;
};
