import { useEffect, useState } from "react";
import "./App.css";
import {
  SheetData,
  SpreadSheetResponse,
  SpreadSheetStructure,
} from "./types/dataTypes";
import { alphabet } from "./utils/alphabet";

function App() {
  const [data, setData] = useState<SheetData[]>([]);
  const [filteredSheet, setFilteredSheet] = useState<
    Array<SpreadSheetStructure[]> | undefined
  >(undefined);

  const getData = async () => {
    try {
      await fetch(
        "https://www.wix.com/_serverless/hiring-task-spreadsheet-evaluator/sheets"
      )
        .then((res) => res.json())
        .then((data: SpreadSheetResponse) => {
          setData(data.sheets);
        });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  console.log(data);

  // const restructureData = () => {
  //   const restructuredData = data.map((sheetData) => {
  //     sheetData.data.map((dataValue) =>
  //       dataValue.map((element, index) => ({
  //         [`${alphabet[index]}1`]: element,
  //       }))
  //     );
  //   });
  // };

  // restructureData();

  const handleSheetClick = (sheetId: string) => {
    const filteredSheet: SheetData | undefined = data.find(
      ({ id }) => id === sheetId
    );
    if (filteredSheet !== undefined) {
      const restructuredList = filteredSheet.data.map((item, i) =>
        item.map((element, index) => ({
          [`${alphabet[index]}${i + 1}`]: element,
        }))
      );
      console.log(filteredSheet);
      console.log(restructuredList);
      // setFilteredSheet(restructuredList);
      // filterRestructuredListFunction(restructuredList);
    }
  };

  const filterRestructuredListFunction = (
    restructuredList: { [x: string]: string | number | boolean }[][]
  ) => {
    const dataValues: object[] = [];
    let functionData: object[] = [];
    restructuredList.map((obj) =>
      obj.map((object) => {
        if (Object.values(object).toString().includes("=SUM")) {
          functionData.push(object);
        } else {
          dataValues.push(object);
        }
      })
    );
    destructureFunction(functionData);
  };

  const destructureFunction = (functionData: object[]) => {
    const func = functionData.map((funct) => Object.values(funct));

    const removeFuncTitle = func[0][0]
      .trim()
      .replace("=SUM", "")
      .replaceAll(" ", "");
    const removeBrackets = removeFuncTitle.replace("(", "").replace(")", "");
    const convertedToArray = removeBrackets.split(",");
    replaceStringsWithData(convertedToArray);
  };

  const replaceStringsWithData = (convertedToArray: string[]) => {
    console.log(convertedToArray);
    convertedToArray.map((item) =>
      filteredSheet?.map((sheet) =>
        sheet.map((obj) => {
          if (Object.keys(obj).toString() == item) {
            const index = convertedToArray.indexOf(item);
            convertedToArray[index] = Object.values(obj).toString();
          }
          calculateSum(convertedToArray);
        })
      )
    );
  };

  const calculateSum = (convertedToArray: string[]) => {
    const valuesToNumbers = convertedToArray.map((value) => {
      return Number(value);
    });

    const sum = valuesToNumbers.reduce((a, b) => a + b);
    console.log(sum);
  };

  return (
    <>
      <div className="cells-wrapper">
        {filteredSheet &&
          filteredSheet[0].map((item, index) => (
            <div className="cell">{item.A1}</div>
          ))}
      </div>
      <div className="sheets-wrapper">
        {data?.map(({ id }) => (
          <div onClick={() => handleSheetClick(id)} className="sheet-box">
            <h6>{id}</h6>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
