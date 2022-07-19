import { styled } from "@mui/material/styles";

const Cell = styled("div")`
  border: 1px solid grey;
  border-top: 0px;
  height: 50px;
  position: relative;
  & > *:nth-child(1) {
    top: -30px;
  }
  & > *:nth-child(2) {
    bottom: -30px;
  }
`;

const TimeCaption = styled("p")`
  position: absolute;
  left: -50px;
  text-align: right;
  width: 40px;
`;

const Wrap = styled("div")`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 0;
`;

export const DailyTable = () => {
  const _render = () => {
    const times = [];

    for (let i = 0; i < 18; i++) {
      times.push(
        <Cell key={i}>
          <TimeCaption>{i + 6}시</TimeCaption>
          {i === 17 && <TimeCaption>{i + 7}시</TimeCaption>}
        </Cell>
      );
    }
    return times;
  };

  return <Wrap>{_render()}</Wrap>;
};
