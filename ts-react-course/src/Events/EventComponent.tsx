import React from "react";

const EventComponent: React.FC = () => {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => console.log(e);

  const onDragStart = (e: React.DragEvent<HTMLDivElement>) => {
    console.log(e);
  };
  return (
    <div>
      <input onChange={(e) => console.log(e)}></input>
      <input onChange={onChange}></input>
      <div draggable onDragStart={onDragStart}>
        Drag Me!
      </div>
    </div>
  );
};

export default EventComponent;
