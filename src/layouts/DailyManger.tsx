import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Stack } from "@mui/material";

import { DailyQuest } from "../components/DailyQuest";
import update from "immutability-helper";
import { DailyTable } from "../components/DailyTable";

import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
export interface Item {
  id: number;
  text: string;
  time: number;
}

export interface ContainerState {
  quests: Item[];
}

export default function DailyManger() {
  const [quests, setQuests] = React.useState([
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

  const moveQuest = React.useCallback(
    (dragIndex: number, hoverIndex: number) => {
      setQuests((prevQuests: Item[]) =>
        update(prevQuests, {
          $splice: [
            [dragIndex, 1],
            [hoverIndex, 0, prevQuests[dragIndex] as Item],
          ],
        })
      );
    },
    []
  );

  const removeQuest = React.useCallback((index: number) => {
    setQuests((prevQuests: Item[]) =>
      update(prevQuests, {
        $splice: [[index, 1]],
      })
    );
  }, []);

  const addNewQuest = () => {};

  const renderQuest = React.useCallback((quest: Item, index: number) => {
    return (
      <DailyQuest
        key={quest.id}
        index={index}
        id={quest.id}
        text={quest.text}
        length={quest.time}
        moveQuest={moveQuest}
        removeQuest={removeQuest}
      />
    );
  }, []);

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
            {quests.map((quest, i) => renderQuest(quest, i))}
          </Stack>
          <p style={{ textAlign: "right" }}>
            <LocalHospitalIcon onClick={addNewQuest} />
          </p>
          <DailyTable />
        </Box>
      </Container>
    </React.Fragment>
  );
}
