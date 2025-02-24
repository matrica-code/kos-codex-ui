import styled from "@emotion/styled";
import { UserModel } from "@kos-codex/kos-codex-models";

import { kosComponent, KosLog } from "@kosdev-code/kos-ui-sdk";

const log = KosLog.createLogger({ name: "user" });
log.debug("user component loaded");

const UserContainer = styled.div``;

interface Props {
  user: UserModel;
}
export const User: React.FunctionComponent<Props> = kosComponent(({ user }) => {
  console.log(user);
  return (
    <UserContainer>
      Name: {user.name} - Role: {user.role}
    </UserContainer>
  );
});

export default User;
