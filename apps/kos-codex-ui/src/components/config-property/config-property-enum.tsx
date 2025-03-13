import styled from "@emotion/styled";

import { kosComponent } from "@kosdev-code/kos-ui-sdk";
import { withDevice } from "../../hooks";
import { ChangeEvent, useState } from "react";
import {
  DeviceModel,
  OcclusionPolicyOptions,
} from "@kos-codex/kos-codex-models";
import { Button } from "../button";
import { Select } from "../select";

const LayoutContainer = styled.div`
  display: flex;
  flex-flow: column;
  gap: 16px;
`;

const FormLayout = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  input {
    text-align: left;
  }
`;

interface Props {
  device: DeviceModel;
}

// extract-code ConfigPropertyEnum
export const ConfigPropertyEnum: React.FunctionComponent<Props> = kosComponent(
  ({ device }: Props) => {
    const [value, setValue] = useState(device.occlusionPolicy.value);

    return (
      <LayoutContainer>
        The Occlusion Policy is set to {device.occlusionPolicy.displayValue}
        <FormLayout>
          <Select
            onChange={(e: ChangeEvent<HTMLSelectElement>) =>
              setValue(e.target.value as OcclusionPolicyOptions)
            }
          >
            {device.occlusionPolicy.options?.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </Select>
          <Button
            onClick={() => {
              device.occlusionPolicy.updateProperty(value || "NONE");
              setValue(() => device.occlusionPolicy.value);
            }}
            type="button"
          >
            Change Policy
          </Button>
        </FormLayout>
      </LayoutContainer>
    );
  },
);

export default withDevice(ConfigPropertyEnum);
