import styled from "@emotion/styled";

import { kosComponent } from "@kosdev-code/kos-ui-sdk";
import { withDevice } from "../../hooks";
import { DeviceModel } from "@kos-codex/kos-codex-models";
import { Button } from "../button";
import { useState } from "react";
import { Checkbox } from "../checkbox";

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

// extract-code ConfigPropertyBoolean
export const ConfigPropertyBoolean: React.FunctionComponent<Props> =
  kosComponent(({ device }: Props) => {
    const [value, setValue] = useState(device.blockSoldOutWater.value ?? false);
    return (
      <LayoutContainer>
        The config property is set to {device.blockSoldOutWater.displayValue}
        <FormLayout>
          <Checkbox
            label="Block Sold Out Water"
            value={value}
            name="blockSoldOutWater"
            onChange={(e) => setValue(e.target.checked)}
          />
          <Button
            type="button"
            onClick={() => device.blockSoldOutWater.updateProperty(value)}
          >
            Save
          </Button>
        </FormLayout>
      </LayoutContainer>
    );
  });

export default withDevice(ConfigPropertyBoolean);
