import { kosComponent, KosLog } from "@kosdev-code/kos-ui-sdk";
import type { TeamModel } from "@kos-codex/kos-codex-models";
import {
  Button,
  Card,
  Input,
  TextContainer,
} from "@kosdev-code/kos-ddk-components";
import { ChangeEvent, useState } from "react";
import { useUserContainer } from "../../hooks";
import { User } from "../user";
import styled from "@emotion/styled";

const log = KosLog.createLogger({ name: "team" });
log.debug("team component loaded");

export const DocString = "name";

interface Props {
  team: TeamModel;
  removeTeam: () => void;
}

const InputLayout = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const TeamCard = styled(Card)`
  display: flex;
  flex-flow: column;
  gap: 16px;
  padding: 24px;
  align-items: flex-start;
`;

const Heading = styled.h4`
  text-align: left;
  font-size: 24px;
  margin: 0;
  align-self: flex-start;
`;

const List = styled.ul`
  padding: 0;
`;

// extract-code TeamComponent
export const Team: React.FunctionComponent<Props> = kosComponent(({ team }) => (
  <Card padding="large" title={team.name}>
    <TextContainer>
      <Heading>{team.name}</Heading>
    </TextContainer>
  </Card>
));

// extract-code TeamWithUser
export const TeamWithUser: React.FunctionComponent<Props> = kosComponent(
  ({ team }) => {
    const [username, setUsername] = useState("");
    const [role, setRole] = useState("guest");

    const { model } = useUserContainer();

    const handleClick = () => {
      if (!username) return;
      model?.createUser({ name: username, role, teamId: team.id });
      setUsername("");
      setRole("guest");
    };

    const users = model?.getUsersByTeamId(team.id);

    return (
      <TeamCard padding="large" title={team.name}>
        <Heading as="h4">{team.name}</Heading>
        <List>
          {users?.map((user) => <User key={user.id} user={user} />) ?? null}
        </List>
        <InputLayout>
          <Input
            value={username}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setUsername(e.target.value)
            }
          />
          <select onChange={(e) => setRole(e.target.value)}>
            {[
              { id: "admin", label: "Admin" },
              { id: "superadmin", label: "Superadmin" },
              { id: "guest", label: "guest" },
              { id: "user", label: "default" },
            ].map(({ id, label }) => {
              return <option key={id} selected={id === role} label={label} />;
            })}
          </select>
          <Button type="button" onClick={handleClick}>
            Create
          </Button>
        </InputLayout>
      </TeamCard>
    );
  },
);

export default Team;
