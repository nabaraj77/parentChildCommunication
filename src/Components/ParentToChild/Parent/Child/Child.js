import React from "react";

const Child1 = ({ data }) => {
  // console.log(data);
  return (
    <>
      <h2>I am Child. I have the following informations:</h2>
      {data.map((item, index) => {
        return (
          <div className="item" key={index}>
            <h3>Id: {index + 1}</h3>
            <p>
              Name: {item.fName} {item.lName}
            </p>
            <p>Location: {item.location}</p>
            <hr />
          </div>
        );
      })}
    </>
  );
};

export default Child1;
