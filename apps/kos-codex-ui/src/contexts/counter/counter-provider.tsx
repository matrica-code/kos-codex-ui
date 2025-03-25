import { PropsWithChildren, createContext, useContext, useMemo } from "react";
import { useCounter } from "../../hooks/counter/use-counter";
import { CounterModel } from "@kos-codex/kos-codex-models";

interface CounterType {
  model?: CounterModel;
}
export const Counter = createContext<CounterType | undefined>(undefined);

interface CounterProviderProps {}

export const CounterProvider: React.FunctionComponent<
  PropsWithChildren<CounterProviderProps>
> = ({ children }) => {
  const { model, ready } = useCounter();
  const value: CounterType = useMemo(() => {
    if (ready && model) {
      return { model };
    }
    return {};
  }, [ready, model]);
  return <Counter.Provider value={value}>{children}</Counter.Provider>;
};
export const useCounterContext = () => {
  const context = useContext(Counter);
  if (!context) {
    throw new Error("useCounterContext must be used within a CounterProvider");
  }
  return context;
};
