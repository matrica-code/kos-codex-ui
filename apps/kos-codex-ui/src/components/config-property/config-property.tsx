import styled from "@emotion/styled";

import { kosComponent, KosLog } from "@kosdev-code/kos-ui-sdk";
import { useConfiguration } from "../../hooks";
import { Button, Input } from "@kosdev-code/kos-ddk-components";
import { ChangeEvent, useState } from "react";

const log = KosLog.createLogger({ name: "config-property" });
log.debug("config-property component loaded");

const ConfigPropertyContainer = styled.div`
  display: flex;
  flex-flow: column;
  gap: 16px;
`;

const FormControl = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  input {
    text-align: left;
  }
`;

// extract-code ConfigProperty
export const ConfigProperty: React.FunctionComponent = kosComponent(() => {
  const { model: config } = useConfiguration();
  const [value, setValue] = useState(config?.name || "");

  return (
    <ConfigPropertyContainer>
      The name of this device is {config?.name}
      <FormControl>
        <Input
          value={value}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setValue(e.target.value)
          }
        />
        <Button onClick={() => config?.handleUpdate(value)}>Change Name</Button>
      </FormControl>
    </ConfigPropertyContainer>
  );
});

export default ConfigProperty;
