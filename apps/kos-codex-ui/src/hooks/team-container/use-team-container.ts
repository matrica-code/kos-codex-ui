import { useKosModel } from "@kosdev-code/kos-ui-sdk";
import { TeamContainer, TeamContainerModel } from "@kos-codex/kos-codex-models";

export const useTeamContainer = () => {
  const modelId = TeamContainer.type;
  const result = useKosModel<TeamContainerModel>({
    modelId,
    modelType: TeamContainer.type,
    options: {},
  });

  return result;
};
