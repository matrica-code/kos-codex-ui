import { UserModel } from "@kos-codex/kos-codex-models";

import { kosComponent, KosLog } from "@kosdev-code/kos-ui-sdk";

const log = KosLog.createLogger({ name: "user" });
log.debug("user component loaded");

interface Props {
  user: UserModel;
}
export const User: React.FunctionComponent<Props> = kosComponent(({ user }) => {
  return (
    <div>
      Name: {user.name} - Role: {user.role}
    </div>
  );
});

export default User;
