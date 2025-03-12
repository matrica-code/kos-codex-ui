// extract-code TeamList
import styled from "@emotion/styled";

import { kosComponent } from "@kosdev-code/kos-ui-sdk";
import { useTeamContainer, withTeamContainer } from "../../hooks";
import { ChangeEvent, useEffect, useState } from "react";
import { TeamWithUser } from "../team/team";
import { TeamContainerModel } from "@kos-codex/kos-codex-models";
import { Input } from "../input";
import { Button } from "../button";

const LayoutContainer = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
`;

interface Props {
  teamContainer: TeamContainerModel;
  prepopulate?: boolean;
}

// extract-code TeamList
export const TeamList: React.FunctionComponent<Props> = kosComponent(
  (props: Props) => {
    const [name, setName] = useState("");

    const { data, createTeam, removeModel } = props.teamContainer;

    const handleAddTeam = () => {
      createTeam?.(name);
      setName("");
    };

    // extract-code ignore
    useEffect(() => {
      if (props.prepopulate) {
        props.teamContainer.prepopulate();
      }
    }, []);

    return (
      <div>
        <LayoutContainer>
          <label htmlFor="name">Name</label>
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
        </LayoutContainer>
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
      </div>
    );
  },
);

export default withTeamContainer(TeamList);
