import { WidgetContainerModel } from "@kos-codex/kos-codex-models";
import { useWidgetContainer } from "./use-widget-container";

interface WidgetContainerProps {
  widgetContainer: WidgetContainerModel;
}

type HoCWidgetContainerProps = WidgetContainerProps;
// react HOC to provide a WidgetContainer to a component
export function withWidgetContainer<
  T extends HoCWidgetContainerProps = HoCWidgetContainerProps,
>(WrappedComponent: React.ComponentType<T>) {
  return (props: Omit<T, keyof WidgetContainerProps>) => {
    const { model, status, KosModelLoader } = useWidgetContainer();

    return (
      <KosModelLoader {...status}>
        <WrappedComponent {...(props as T)} widgetContainer={model} />
      </KosModelLoader>
    );
  };
}
