import React, { useEffect } from "react";

const Child1 = (props) => {
  const data = [
    {
      name: "Kishor",
      location: "Butwal",
      phone: 123123,
    },
    {
      name: "Nikesh",
      location: "Dolakha",
      phone: 321321,
    },
  ];
  useEffect(() => {
    props.setData(data);
  }, []);

  return <div>Child 1</div>;
};

export default Child1;
