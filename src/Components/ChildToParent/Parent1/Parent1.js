import { useState } from "react";
import Child1 from "./Child1/Child1";

const Parent1 = () => {
  const [data, setData] = useState([]);
  //   console.log(data);
  return (
    <div>
      <h2>
        I am Parent. And I have the following informations which I have received
        from Child 1.
      </h2>
      <Child1 setData={setData} />
      {data.map((item, index) => {
        return (
          <div key={index}>
            <h1>Name:{item.name}</h1>
            <p>Location: {item.location}</p>
            <p>Phone: {item.phone}</p>
            <hr />
          </div>
        );
      })}
    </div>
  );
};

export default Parent1;
