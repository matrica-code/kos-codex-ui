import { UnitExampleModel } from "@kos-codex/kos-codex-models";
import { useUnitExample } from "./use-unit-example";

interface UnitExampleProps {
  unitExample: UnitExampleModel;
}

type HoCUnitExampleProps = UnitExampleProps;
// react HOC to provide a UnitExample to a component
export function withUnitExample<
  T extends HoCUnitExampleProps = HoCUnitExampleProps,
>(WrappedComponent: React.ComponentType<T>) {
  return (props: Omit<T, keyof UnitExampleProps>) => {
    const { model, status, KosModelLoader } = useUnitExample();

    return (
      <KosModelLoader {...status}>
        <WrappedComponent {...(props as T)} unitExample={model} />
      </KosModelLoader>
    );
  };
}
