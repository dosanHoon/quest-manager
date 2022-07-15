import { styled } from "@mui/material/styles";

const Cell = styled("div")`
  border: 0.5px solid grey;
  width: 100px;
  height: 100px;
  position: relative;
  & > *:nth-child(1) {
    top: -30px;
  }
  & > *:nth-child(2) {
    bottom: -30px;
  }
`;

const Wrap = styled("div")`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
`;

const Line = styled("div")`
  display: flex;
`;

export const MonthTable: React.FC = () => {
  const _renderWeek = () => {
    const times = [];
    for (let i = 0; i < 7; i++) {
      times.push(<Cell>{i}</Cell>);
    }
    return times;
  };

  return (
    <Wrap>
      <Line>{_renderWeek()}</Line>
      <Line>{_renderWeek()}</Line>
      <Line>{_renderWeek()}</Line>
      <Line>{_renderWeek()}</Line>
      <Line>{_renderWeek()}</Line>
    </Wrap>
  );
};
