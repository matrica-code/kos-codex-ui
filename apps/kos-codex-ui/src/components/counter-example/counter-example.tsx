import styled from "@emotion/styled";
import { kosComponent } from "@kosdev-code/kos-ui-sdk";
import { useColor, useCounter, withCounter } from "../../hooks";
import { CounterModel } from "@kos-codex/kos-codex-models";

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

// extract-code CounterWithHOC
const Counter: React.FunctionComponent<{
  counter: CounterModel;
}> = kosComponent(({ counter }: { counter: CounterModel }) => {
  return (
    <Main>
      <div>Active Count: {counter.count}</div>
    </Main>
  );
});
// extract-code CounterHOCDeclaration
export const CounterWithHOC = withCounter(Counter);

export default CounterExample;
