import { useKosModel } from "@kosdev-code/kos-ui-sdk";
import { Counter, CounterModel } from "@kos-codex/kos-codex-models";

export const useCounter = () => {
  const modelId = Counter.type;
  const result = useKosModel<CounterModel>({
    modelId,
    modelType: Counter.type,
    options: {},
  });

  return result;
};
