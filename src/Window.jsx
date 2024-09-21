import { useRef, useState } from "react";
import TitleBar from "./TitleBar";
import WindowContent from "./WindowContent";

export default function Window({ title, icon, isMouseUp, children }) {
  const [position, setPosition] = useState({ x: 100, y: 100 });

  const [isMoving, setIsMoving] = useState(false);
  const moveStartPosition = useRef({
    x: undefined,
    y: undefined,
  });

  if (isMouseUp && isMoving) {
    setIsMoving(false);
  }

  return (
    <div
      className="window"
      style={{
        position: "absolute",
        left: `${position.x}px`,
        top: `${position.y}px`,
        width: "600px",
        height: "600px",
        backgroundColor: "#11111b",
        borderRadius: "8px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <TitleBar
        icon={icon}
        title={title}
        handleMouseDown={(event) => {
          setIsMoving(true);
          moveStartPosition.current = {
            x: event.clientX - position.x,
            y: event.clientY - position.y,
          };
        }}
        handleMouseMove={(event) => {
          if (!isMoving) return;

          setPosition({
            x: event.clientX - moveStartPosition.current.x,
            y: event.clientY - moveStartPosition.current.y,
          });
        }}
      />
      <WindowContent>{children}</WindowContent>
    </div>
  );
}
