import { useKosModel } from "@kosdev-code/kos-ui-sdk";
import { Color, ColorModel } from "@kos-codex/kos-codex-models";

export const useColor = () => {
  const modelId = Color.type;
  const result = useKosModel<ColorModel>({
    modelId,
    modelType: Color.type,
    options: {},
  });

  return result;
};
