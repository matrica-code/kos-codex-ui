import { ColorModel } from "@kos-codex/kos-codex-models";
import { useColor } from "./use-color";

interface ColorProps {
  color: ColorModel;
}

type HoCColorProps = ColorProps;
// react HOC to provide a Color to a component
export function withColor<T extends HoCColorProps = HoCColorProps>(
  WrappedComponent: React.ComponentType<T>
) {
  return (props: Omit<T, keyof ColorProps>) => {
    const { model, status, KosModelLoader } = useColor();

    return (
      <KosModelLoader {...status}>
        <WrappedComponent {...(props as T)} color={model} />
      </KosModelLoader>
    );
  };
}
