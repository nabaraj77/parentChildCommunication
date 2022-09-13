import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import Parent from "./Components/ParentToChild/Parent/Parent";
import Parent1 from "./Components/ChildToParent/Parent1/Parent1";
import Error from "./Components/Error";
import Home from "./Components/Home";

function App() {
  const data = [
    {
      fName: "Nabaraj",
      lName: "Dahal",
      location: "Kathmandu",
    },
    {
      fName: "Ram",
      lName: "Giri",
      location: "Bhaktapur",
    },
  ];

  return (
    <>
      <div className="links">
        <ul>
          <li>
            <Link to="ParentToChild">
              Parent To Child Communication Example
            </Link>
          </li>
          <li>
            <Link to="ChildToParent">Child To Parent Communication </Link>
          </li>
        </ul>
      </div>
      <Routes>
        <Route path="ParentToChild" element={<Parent data={data} />} />
        <Route path="ChildToParent" element={<Parent1 />} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
