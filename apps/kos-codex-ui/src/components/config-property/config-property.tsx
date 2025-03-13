import styled from "@emotion/styled";

import { kosComponent, KosLog } from "@kosdev-code/kos-ui-sdk";
import { withDevice } from "../../hooks";
import { ChangeEvent, useState } from "react";
import { DeviceModel } from "@kos-codex/kos-codex-models";
import { Input } from "../input";
import { Button } from "../button";

const log = KosLog.createLogger({ name: "config-property" });
log.debug("config-property component loaded");

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

// extract-code ConfigProperty
export const ConfigProperty: React.FunctionComponent<Props> = kosComponent(
  ({ device }: Props) => {
    const [value, setValue] = useState(device.deviceName.value || "");

    return (
      <LayoutContainer>
        The name of this device is {device.deviceName.displayValue}
        <FormLayout>
          <Input
            value={value}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setValue(e.target.value)
            }
          />
          <Button
            onClick={() => device.deviceName.updateProperty(value)}
            type="button"
          >
            Change Name
          </Button>
        </FormLayout>
      </LayoutContainer>
    );
  },
);

export default withDevice(ConfigProperty);
