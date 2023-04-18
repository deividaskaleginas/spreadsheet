import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  const [filteredSheet, setFilteredSheet] = useState(data[0]);
  const alphabet = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  const getData = async () => {
    try {
      await fetch(
        "https://www.wix.com/_serverless/hiring-task-spreadsheet-evaluator/sheets"
      )
        .then((res) => res.json())
        .then((obj) => setData(obj.sheets));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  console.log(data);

  return <div className="App"></div>;
}

export default App;
