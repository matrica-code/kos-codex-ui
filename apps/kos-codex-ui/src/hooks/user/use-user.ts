import { useKosModel } from "@kosdev-code/kos-ui-sdk";
import { User, UserModel } from "@kos-codex/kos-codex-models";

export const useUser = (id: string) => {
  const modelId = id;
  const result = useKosModel<UserModel>({
    modelId,
    modelType: User.type,
    options: {},
  });

  return result;
};
