import { CounterModel } from "@kos-codex/kos-codex-models";
import { useCounter } from "./use-counter";

interface CounterProps {
  counter: CounterModel;
}

type HoCCounterProps = CounterProps;
// react HOC to provide a Counter to a component
export function withCounter<T extends HoCCounterProps = HoCCounterProps>(
  WrappedComponent: React.ComponentType<T>
) {
  return (props: Omit<T, keyof CounterProps>) => {
    const { model, status, KosModelLoader } = useCounter();

    return (
      <KosModelLoader {...status}>
        <WrappedComponent {...(props as T)} counter={model} />
      </KosModelLoader>
    );
  };
}
