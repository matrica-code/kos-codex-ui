import { useKosModel } from "@kosdev-code/kos-ui-sdk";
import { UserContainer, UserContainerModel } from "@kos-codex/kos-codex-models";

export const useUserContainer = () => {
  const modelId = UserContainer.type;
  const result = useKosModel<UserContainerModel>({
    modelId,
    modelType: UserContainer.type,
    options: {},
  });

  return result;
};
