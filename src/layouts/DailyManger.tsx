import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Stack } from "@mui/material";

import { Card } from "../components/Card";
import update from "immutability-helper";
import { DailyTable } from "../components/DailyTable";

export interface Item {
  id: number;
  text: string;
}

export interface ContainerState {
  cards: Item[];
}

export default function DailyManger() {
  const [cards, setCards] = React.useState([
    {
      id: 1,
      text: "운동하기",
      time: 1,
    },
    {
      id: 2,
      text: "공부하기",
    },
    {
      id: 3,
      text: "놀기",
    },
    {
      id: 4,
      text: "밥 먹기",
    },
    {
      id: 5,
      text: "책읽기",
    },
    {
      id: 6,
      text: "???",
    },
    {
      id: 7,
      text: "PROFIT",
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

  const renderCard = React.useCallback(
    (card: { id: number; text: string }, index: number) => {
      return (
        <Card
          key={card.id}
          index={index}
          id={card.id}
          text={card.text}
          moveCard={moveCard}
        />
      );
    },
    []
  );

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <p>22년 7월 5일 화</p>
        <Box
          sx={{
            bgcolor: "#cfe8fc",
            height: "100vh",
            padding: "5px 10px",
            position: "relative",
          }}
        >
          <Stack spacing={2}>
            {cards.map((card, i) => renderCard(card, i))}
          </Stack>
          <DailyTable />
        </Box>
      </Container>
    </React.Fragment>
  );
}
