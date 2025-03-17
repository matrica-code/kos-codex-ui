import { useKosModel } from "@kosdev-code/kos-ui-sdk";
import {
  WidgetContainer,
  WidgetContainerModel,
} from "@kos-codex/kos-codex-models";

export const useWidgetContainer = () => {
  const modelId = WidgetContainer.type;
  const result = useKosModel<WidgetContainerModel>({
    modelId,
    modelType: WidgetContainer.type,
    options: {},
  });

  return result;
};
