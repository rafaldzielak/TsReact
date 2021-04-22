import React from "react";
import { ChildAsFC } from "./Child";

const Parent = () => {
  return (
    <ChildAsFC color={"white"} onClick={() => console.log("Clicked")}>
      AAA
    </ChildAsFC>
  );
};

export default Parent;
