import styled from "@emotion/styled";
import { kosComponent } from "@kosdev-code/kos-ui-sdk";
import { useColor, useCounter } from "../../hooks";

const Main = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => props.color || "transparent"};
`;

// extract-code CounterExample
export const CounterExample: React.FunctionComponent = kosComponent(() => {
  const { model } = useCounter();

  const { count } = model || {};

  return (
    <Main>
      <div>Active Count: {count}</div>
    </Main>
  );
});

// extract-code CounterWithToggle
export const CounterWithToggle: React.FunctionComponent = kosComponent(() => {
  const { model } = useCounter();

  const { count, toggleCounter, isCounting } = model || {};

  return (
    <Main>
      <div>Active Count: {count}</div>
      <button onClick={toggleCounter} type="button">
        {isCounting ? "Stop" : "Start"}
      </button>
    </Main>
  );
});

// extract-code CounterWithColor
export const CounterWithColor: React.FunctionComponent = kosComponent(() => {
  const { model } = useCounter();
  const { model: colorModel } = useColor();

  const { count, toggleCounter, isCounting } = model || {};
  const { color } = colorModel || {};

  return (
    <Main color={color}>
      <div>Active Count: {count}</div>
      <button onClick={toggleCounter} type="button">
        {isCounting ? "Stop" : "Start"}
      </button>
    </Main>
  );
});

export default CounterExample;
