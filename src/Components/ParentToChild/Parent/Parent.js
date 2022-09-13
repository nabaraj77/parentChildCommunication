import React from "react";
import Child from "./Child/Child";

const Parent = ({ data }) => {
  return (
    <>
      <h1>I am Parent.</h1>
      <Child data={data} />
    </>
  );
};

export default Parent;
