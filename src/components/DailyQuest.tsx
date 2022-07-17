import { styled } from "@mui/system";
import type { Identifier, XYCoord } from "dnd-core";
import type { FC } from "react";
import { useRef } from "react";
import { useDrag, useDrop } from "react-dnd";
import { ItemTypes } from "../ItemTypes";
import CancelIcon from "@mui/icons-material/Cancel";

const CloseBtn = styled(CancelIcon)``;

const Item = styled("div")<{ length: number }>`
  text-align: center;
  z-index: 9999;
  cursor: move;
  margin: 5px;
  background: white;
  padding: 10px;
  border: 1px solid;
  border-radius: 6px;
  &::hover ${CloseBtn} {
    opacity: 0;
  }
  ${CloseBtn} {
    position: absolute;
    opacity: 0;
    right: 30px;
  }
  ${({ length }) => `height : ${length * 44}px`}
`;

export interface CardProps {
  id: any;
  text: string;
  index: number;
  length: number;
  moveCard: (dragIndex: number, hoverIndex: number) => void;
  removeCard: (index: number) => void;
}

interface DragItem {
  index: number;
  id: string;
  type: string;
}

export const DailyQuest: FC<CardProps> = ({
  id,
  text,
  index,
  length,
  removeCard,
  moveCard,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [{ handlerId }, drop] = useDrop<
    DragItem,
    void,
    { handlerId: Identifier | null }
  >({
    accept: ItemTypes.CARD,
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
      };
    },
    hover(item: DragItem, monitor) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;

      // Don't replace items with themselves
      if (dragIndex === hoverIndex) {
        return;
      }

      // Determine rectangle on screen
      const hoverBoundingRect = ref.current?.getBoundingClientRect();

      // Get vertical middle
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

      // Determine mouse position
      const clientOffset = monitor.getClientOffset();

      // Get pixels to the top
      const hoverClientY = (clientOffset as XYCoord).y - hoverBoundingRect.top;

      // Only perform the move when the mouse has crossed half of the items height
      // When dragging downwards, only move when the cursor is below 50%
      // When dragging upwards, only move when the cursor is above 50%

      // Dragging downwards
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }

      // Dragging upwards
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }

      // Time to actually perform the action
      moveCard(dragIndex, hoverIndex);

      // Note: we're mutating the monitor item here!
      // Generally it's better to avoid mutations,
      // but it's good here for the sake of performance
      // to avoid expensive index searches.
      item.index = hoverIndex;
    },
  });

  const [{ isDragging }, drag] = useDrag({
    type: ItemTypes.CARD,
    item: () => {
      return { id, index };
    },
    collect: (monitor: any) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const opacity = isDragging ? 0 : 1;
  drag(drop(ref));
  return (
    <Item
      ref={ref}
      style={{ opacity }}
      data-handler-id={handlerId}
      length={length}
    >
      <CloseBtn onClick={() => removeCard(index)} />
      {text}
    </Item>
  );
};