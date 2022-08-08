import React from "react";
import { DragPreviewImage, useDrag } from "react-dnd";

export const ItemTypes = {
    KNIGHT: "knight",
};

export default function Knight() {
    const [{ isDragging }, drag, preview] = useDrag(() => ({
        type: ItemTypes.KNIGHT,
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
    }));

    return (
        <>
            <DragPreviewImage connect={preview} src={"https://img.khan.co.kr/news/2022/01/21/l_2022012201002706200236691.jpg"} />
            <div
                ref={drag}
                style={{
                    opacity: isDragging ? 0.5 : 1,
                    fontSize: "10vw",
                    fontWeight: "bold",
                    cursor: "move",
                }}
            >
                ♘
            </div>
        </>
    );
}
