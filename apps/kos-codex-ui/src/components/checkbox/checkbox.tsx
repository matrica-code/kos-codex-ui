import styled from "@emotion/styled";

import { kosComponent, KosLog } from "@kosdev-code/kos-ui-sdk";
import React from "react";

const log = KosLog.createLogger({ name: "checkbox" });
log.debug("checkbox component loaded");

const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

interface Props
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "value"> {
  label: string;
  value: boolean;
}
export const Checkbox: React.FunctionComponent<Props> = kosComponent(
  ({ value, label, name, ...rest }) => {
    return (
      <CheckboxContainer>
        <input id={name} type="checkbox" {...rest} checked={value} />
        <label htmlFor={name}>{label}</label>
      </CheckboxContainer>
    );
  },
);

export default Checkbox;
