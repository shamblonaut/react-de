import { useRef, useState } from "react";
import TitleBar from "./TitleBar";
import WindowContent from "./WindowContent";

export default function Window({
  title,
  icon,
  minimized,
  initialPosition = { x: 100, y: 100 },
  isMouseUp,
  children,
}) {
  const [position, setPosition] = useState(initialPosition);

  const isMoving = useRef(false);
  const moveStartPosition = useRef({
    x: undefined,
    y: undefined,
  });

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
        display: minimized ? "none" : "flex",
        flexDirection: "column",
      }}
    >
      <TitleBar
        icon={icon}
        title={title}
        handleMouseDown={(event) => {
          isMoving.current = true;
          moveStartPosition.current = {
            x: event.clientX - position.x,
            y: event.clientY - position.y,
          };
        }}
        handleMouseMove={(event) => {
          if (isMouseUp || !isMoving.current) return;

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
