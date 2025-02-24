import { UserContainerModel } from "@kos-codex/kos-codex-models";
import { useUserContainer } from "./use-user-container";

interface UserContainerProps {
  userContainer: UserContainerModel;
}

type HoCUserContainerProps = UserContainerProps;
// react HOC to provide a UserContainer to a component
export function withUserContainer<
  T extends HoCUserContainerProps = HoCUserContainerProps,
>(WrappedComponent: React.ComponentType<T>) {
  return (props: Omit<T, keyof UserContainerProps>) => {
    const { model, status, KosModelLoader } = useUserContainer();

    return (
      <KosModelLoader {...status}>
        <WrappedComponent {...(props as T)} userContainer={model} />
      </KosModelLoader>
    );
  };
}
