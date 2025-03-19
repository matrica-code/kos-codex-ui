import { FuturesModel } from "@kos-codex/kos-codex-models";
import { useFutures } from "./use-futures";

interface FuturesProps {
  futures: FuturesModel;
}

interface Identifiable {
  id: string;
}

type HoCFuturesProps = FuturesProps & Identifiable;
// react HOC to provide a Futures to a component
export function withFutures<T extends HoCFuturesProps = HoCFuturesProps>(
  WrappedComponent: React.ComponentType<T>,
) {
  return (props: Omit<T, keyof FuturesProps>) => {
    const { model, status, KosModelLoader } = useFutures(props.id);

    return (
      <KosModelLoader {...status}>
        <WrappedComponent {...(props as T)} futures={model} />
      </KosModelLoader>
    );
  };
}
