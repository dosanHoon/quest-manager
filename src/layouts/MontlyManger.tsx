import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Stack } from "@mui/material";

import update from "immutability-helper";
import { DailyTable } from "../components/DailyTable";
import { MonthTable } from "../components/MonthTable";

export interface Item {
  id: number;
  text: string;
  time: number;
}

export interface ContainerState {
  cards: Item[];
}

export default function MontlyManger() {
  const [cards, setCards] = React.useState([
    {
      id: 1,
      text: "운동하기",
      time: 1,
    },
    {
      id: 2,
      text: "공부하기",
      time: 2,
    },
    {
      id: 3,
      text: "놀기",
      time: 3,
    },
    {
      id: 4,
      text: "밥 먹기",
      time: 1,
    },
    {
      id: 5,
      text: "책읽기",
      time: 1,
    },
    {
      id: 6,
      text: "???",
      time: 1,
    },
    {
      id: 7,
      text: "PROFIT",
      time: 1,
    },
  ]);

  const moveCard = React.useCallback(
    (dragIndex: number, hoverIndex: number) => {
      setCards((prevCards: Item[]) =>
        update(prevCards, {
          $splice: [
            [dragIndex, 1],
            [hoverIndex, 0, prevCards[dragIndex] as Item],
          ],
        })
      );
    },
    []
  );

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <p>22년 7월</p>
        <Box
          sx={{
            bgcolor: "#cfe8fc",
            height: "100vh",
            padding: "5px 10px",
            position: "relative",
          }}
        >
          {/* <Stack spacing={2}>
            {cards.map((card, i) => renderCard(card, i))}
          </Stack> */}
          <MonthTable />
        </Box>
      </Container>
    </React.Fragment>
  );
}
