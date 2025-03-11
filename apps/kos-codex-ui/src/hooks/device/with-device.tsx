import { DeviceModel } from "@kos-codex/kos-codex-models";
import { useDevice } from "./use-device";

interface DeviceProps {
  device: DeviceModel;
}

type HoCDeviceProps = DeviceProps;
// react HOC to provide a Device to a component
export function withDevice<T extends HoCDeviceProps = HoCDeviceProps>(
  WrappedComponent: React.ComponentType<T>,
) {
  return (props: Omit<T, keyof DeviceProps>) => {
    const { model, status, KosModelLoader } = useDevice();

    return (
      <KosModelLoader {...status}>
        <WrappedComponent {...(props as T)} device={model} />
      </KosModelLoader>
    );
  };
}
