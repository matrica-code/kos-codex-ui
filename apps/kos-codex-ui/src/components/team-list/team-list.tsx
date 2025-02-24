// extract-code TeamList
import styled from "@emotion/styled";

import { kosComponent, KosLog } from "@kosdev-code/kos-ui-sdk";
import { useTeamContainer } from "../../hooks";
import { ChangeEvent, useState } from "react";
import { TeamWithUser } from "../team/team";
import { Button, Input, Label } from "@kosdev-code/kos-ddk-components";

const TeamListContainer = styled.div``;

const InputContainer = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
`;

// extract-code TeamList
export const TeamList: React.FunctionComponent = kosComponent(() => {
  const { model } = useTeamContainer();
  const [name, setName] = useState("");

  const { data, createTeam, removeModel } = model || {};

  const handleAddTeam = () => {
    createTeam?.(name);
    setName("");
  };

  return (
    <TeamListContainer>
      <InputContainer>
        <Label htmlFor="name">Name</Label>
        <Input
          type="text"
          value={name}
          name="name"
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setName(e.target.value)
          }
        />
        <Button onClick={handleAddTeam} type="button">
          Add Team
        </Button>
      </InputContainer>
      <ul>
        {data &&
          data.map((team) => (
            <TeamWithUser
              key={team.id}
              team={team}
              removeTeam={() => removeModel?.(team.id)}
            />
          ))}
      </ul>
    </TeamListContainer>
  );
});

export default TeamList;
