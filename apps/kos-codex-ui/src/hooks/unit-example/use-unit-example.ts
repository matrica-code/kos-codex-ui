import { useKosModel } from "@kosdev-code/kos-ui-sdk";
import { UnitExample, UnitExampleModel } from "@kos-codex/kos-codex-models";

export const useUnitExample = () => {
  const modelId = UnitExample.type;
  const result = useKosModel<UnitExampleModel>({
    modelId,
    modelType: UnitExample.type,
    options: {},
  });

  return result;
};
