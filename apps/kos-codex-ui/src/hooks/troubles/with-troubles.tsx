import { TroublesModel } from "@kos-codex/kos-codex-models";
import { useTroubles } from "./use-troubles";

interface TroublesProps {
  troubles: TroublesModel;
}

interface Identifiable {
  id: string;
}

type HoCTroublesProps = TroublesProps & Identifiable;
// react HOC to provide a Troubles to a component
export function withTroubles<T extends HoCTroublesProps = HoCTroublesProps>(
  WrappedComponent: React.ComponentType<T>,
) {
  return (props: Omit<T, keyof TroublesProps>) => {
    const { model, status, KosModelLoader } = useTroubles(props.id);

    return (
      <KosModelLoader {...status}>
        <WrappedComponent {...(props as T)} troubles={model} />
      </KosModelLoader>
    );
  };
}
