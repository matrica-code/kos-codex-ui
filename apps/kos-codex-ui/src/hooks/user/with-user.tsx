import { UserModel } from "@kos-codex/kos-codex-models";
import { useUser } from "./use-user";

interface UserProps {
  user: UserModel;
}

interface Identifiable {
  id: string;
}

type HoCUserProps = UserProps & Identifiable;
// react HOC to provide a User to a component
export function withUser<T extends HoCUserProps = HoCUserProps>(
  WrappedComponent: React.ComponentType<T>
) {
  return (props: Omit<T, keyof UserProps>) => {
    const { model, status, KosModelLoader } = useUser(props.id);

    return (
      <KosModelLoader {...status}>
        <WrappedComponent {...(props as T)} user={model} />
      </KosModelLoader>
    );
  };
}
