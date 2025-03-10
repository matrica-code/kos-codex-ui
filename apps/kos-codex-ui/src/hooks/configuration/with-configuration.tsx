import { ConfigurationModel } from "@kos-codex/kos-codex-models";
import { useConfiguration } from "./use-configuration";

interface ConfigurationProps {
  configuration: ConfigurationModel;
}

type HoCConfigurationProps = ConfigurationProps;
// react HOC to provide a Configuration to a component
export function withConfiguration<
  T extends HoCConfigurationProps = HoCConfigurationProps,
>(WrappedComponent: React.ComponentType<T>) {
  return (props: Omit<T, keyof ConfigurationProps>) => {
    const { model, status, KosModelLoader } = useConfiguration();

    return (
      <KosModelLoader {...status}>
        <WrappedComponent {...(props as T)} configuration={model} />
      </KosModelLoader>
    );
  };
}
