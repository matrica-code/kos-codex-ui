import { TeamContainerModel } from "@kos-codex/kos-codex-models";
import { useTeamContainer } from "./use-team-container";

interface TeamContainerProps {
  teamContainer: TeamContainerModel;
}

type HoCTeamContainerProps = TeamContainerProps;
// react HOC to provide a TeamContainer to a component
export function withTeamContainer<
  T extends HoCTeamContainerProps = HoCTeamContainerProps
>(WrappedComponent: React.ComponentType<T>) {
  return (props: Omit<T, keyof TeamContainerProps>) => {
    const { model, status, KosModelLoader } = useTeamContainer();

    return (
      <KosModelLoader {...status}>
        <WrappedComponent {...(props as T)} teamContainer={model} />
      </KosModelLoader>
    );
  };
}
