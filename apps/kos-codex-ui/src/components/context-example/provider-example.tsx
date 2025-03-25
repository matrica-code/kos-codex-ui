import { CounterProvider } from "../../contexts";
import ContextExample from "./context-example";

// extract-code provider
export const ProviderExample = () => {
  return (
    <CounterProvider>
      <ContextExample />
    </CounterProvider>
  );
};
