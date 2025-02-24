import { TeamModel } from "@kos-codex/kos-codex-models";
import { useTeam } from "./use-team";

interface TeamProps {
  team: TeamModel;
}

interface Identifiable {
  id: string;
}

type HoCTeamProps = TeamProps & Identifiable;
// react HOC to provide a Team to a component
export function withTeam<T extends HoCTeamProps = HoCTeamProps>(
  WrappedComponent: React.ComponentType<T>
) {
  return (props: Omit<T, keyof TeamProps>) => {
    const { model, status, KosModelLoader } = useTeam(props.id);

    return (
      <KosModelLoader {...status}>
        <WrappedComponent {...(props as T)} team={model} />
      </KosModelLoader>
    );
  };
}
