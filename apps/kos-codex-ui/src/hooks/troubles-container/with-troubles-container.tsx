import { TroublesContainerModel } from "@kos-codex/kos-codex-models";
import { useTroublesContainer } from "./use-troubles-container";

interface TroublesContainerProps {
  troublesContainer: TroublesContainerModel;
}

type HoCTroublesContainerProps = TroublesContainerProps;
// react HOC to provide a TroublesContainer to a component
export function withTroublesContainer<
  T extends HoCTroublesContainerProps = HoCTroublesContainerProps,
>(WrappedComponent: React.ComponentType<T>) {
  return (props: Omit<T, keyof TroublesContainerProps>) => {
    const { model, status, KosModelLoader } = useTroublesContainer();

    return (
      <KosModelLoader {...status}>
        <WrappedComponent {...(props as T)} troublesContainer={model} />
      </KosModelLoader>
    );
  };
}
