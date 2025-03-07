import { useKosModel } from "@kosdev-code/kos-ui-sdk";
import {
  TroublesContainer,
  TroublesContainerModel,
} from "@kos-codex/kos-codex-models";

export const useTroublesContainer = () => {
  const modelId = TroublesContainer.type;
  const result = useKosModel<TroublesContainerModel>({
    modelId,
    modelType: TroublesContainer.type,
    options: {},
  });

  return result;
};
