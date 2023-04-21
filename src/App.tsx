import { useEffect, useState } from "react";
import "./App.css";
import {
  CellFunctions,
  RestructuredList,
  SheetData,
  SpreadSheetResponse,
  SpreadSheetStructure,
} from "./types/dataTypes";
import { alphabet } from "./utils/alphabet";

function App() {
  const [data, setData] = useState<SheetData[]>([]);
  const [restructuredData, setRestructuredData] = useState<SheetData[]>([]);
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

  const restructureData = () => {
    if (data !== undefined) {
      const restructData = data.map((sheetData) => ({
        id: sheetData.id,
        data: sheetData.data.map((item, i) =>
          item.map((element, index) => ({
            [`${alphabet[index]}${i + 1}`]: element,
          }))
        ),
      }));
      console.log(restructData);
    } else {
      console.log("Data undefined");
    }
  };

  restructureData();

  // const handleSheetClick = (sheetId: string) => {
  //   const filteredSheet: SheetData | undefined = data.find(
  //     ({ id }) => id === sheetId
  //   );
  //   if (filteredSheet !== undefined) {
  //     const restructuredList = filteredSheet.data.map((item, i) =>
  //       item.map((element, index) => ({
  //         [`${alphabet[index]}${i + 1}`]: element,
  //       }))
  //     );
  //     console.log(filteredSheet);
  //     console.log(restructuredList);
  //     setFilteredSheet(restructuredList);
  //     filterRestructuredListFunction(restructuredList);
  //   }
  // };

  // const filterRestructuredListFunction = (
  //   restructuredList: RestructuredList
  // ) => {
  //   const dataValues: object[] = [];
  //   let functionData: object[] = [];
  //   let concatData: object[] = [];
  //   restructuredList.map((obj) =>
  //     obj.map((object) => {
  //       // if (Object.values(object).toString().includes(CellFunctions.SUM)) {
  //       //   functionData.push(object);
  //       // }
  //       // if (Object.values(object).toString().includes("=MULTIPLY")) {
  //       //   functionData.push(object);
  //       // }
  //       // if (Object.values(object).toString().includes("=DIVIDE")) {
  //       //   functionData.push(object);
  //       // }
  //       // if (Object.values(object).toString().includes("=GT")) {
  //       //   functionData.push(object);
  //       // }
  //       // if (Object.values(object).toString().includes("=EQ")) {
  //       //   functionData.push(object);
  //       // }
  //       if (Object.values(object).toString().includes("=NOT")) {
  //         functionData.push(object);
  //       }
  //       // if (Object.values(object).toString().includes("=AND")) {
  //       //   functionData.push(object);
  //       // }
  //       // if (Object.values(object).toString().includes("=OR")) {
  //       //   functionData.push(object);
  //       // }
  //       // if (Object.values(object).toString().includes("=CONCAT")) {
  //       //   functionData.push(object);
  //       // }
  //       else {
  //         dataValues.push(object);
  //       }
  //     })
  //   );
  //   // concatStrings(concatData);
  //   console.log(dataValues);
  //   console.log(functionData);

  //   destructureFunction(functionData);
  // };

  // const concatStrings = (concatData: object[]) => {
  //   const str = concatData.map((string) => Object.values(string));
  //   str.map((string) => {
  //     const removeFuncTitle = string[0]
  //       .replace("=CONCAT", "")
  //       .replaceAll('"', "")
  //       .replaceAll("(", "")
  //       .replaceAll(")", "");

  //     const convertedToArray = removeFuncTitle.split(",");
  //     console.log(convertedToArray);
  //   });
  // };

  // const destructureFunction = (functionData: object[]) => {
  //   const func = functionData.map((funct) => Object.values(funct));
  //   func.forEach((element) => {
  //     const removeFuncTitle = element[0]
  //       .trim()
  //       // .replace(CellFunctions.SUM, "")
  //       // .replace("=MULTIPLY", "")
  //       // .replace("=DIVIDE", "")
  //       // .replace("=GT", "")
  //       // .replace("=EQ", "")
  //       .replace("=NOT", "")
  //       // .replace("=AND", "")
  //       // .replace("=OR", "")
  //       // .replace("=CONCAT", "")

  //       .replaceAll(" ", "")
  //       .replaceAll('"', "");
  //     const removeBrackets = removeFuncTitle
  //       .replaceAll("(", "")
  //       .replaceAll(")", "");
  //     const convertedToArray = removeBrackets.split(",");
  //     console.log(convertedToArray);
  //     replaceStringsWithData(convertedToArray);
  //   });
  // };

  // // const replacePositionsWithData = (dataValues: object[]) => {
  // //   dataValues.map((item) =>
  // //     filteredSheet?.map((sheet) =>
  // //       sheet.map((obj) => {
  // //         console.log(item);
  // //         // if (Object.keys(obj).toString() == item) {

  // //         // }
  // //       })
  // //     )
  // //   );
  // // };

  // const replaceStringsWithData = (convertedToArray: string[]) => {
  //   convertedToArray.map((item) =>
  //     filteredSheet?.map((sheet) =>
  //       sheet.map((obj) => {
  //         if (Object.keys(obj).toString() === item) {
  //           const index = convertedToArray.indexOf(item);
  //           convertedToArray[index] = Object.values(obj).toString();
  //         }
  //         // calculateSum(convertedToArray);
  //         // multiply(convertedToArray);
  //         // divide(convertedToArray);
  //         // isGreater(convertedToArray);
  //         // isEqual(convertedToArray);
  //         negateBooleanValue(convertedToArray);
  //         // allAreTrue(convertedToArray);
  //         // onlyOneAreTrue(convertedToArray);
  //         // concat(convertedToArray);
  //       })
  //     )
  //   );
  // };

  // const calculateSum = (convertedToArray: string[]) => {
  //   const valuesToNumbers = convertedToArray.map((value) => {
  //     return Number(value);
  //   });

  //   const sum = valuesToNumbers.reduce((a, b) => a + b);
  //   console.log(sum);
  // };

  // const multiply = (convertedToArray: string[]) => {
  //   const valuesToNumbers = convertedToArray.map((value) => {
  //     return Number(value);
  //   });

  //   const sum = valuesToNumbers.reduce((a, b) => a * b);
  //   console.log(sum);
  // };
  // const divide = (convertedToArray: string[]) => {
  //   const valuesToNumbers = convertedToArray.map((value) => {
  //     return Number(value);
  //   });

  //   const sum = valuesToNumbers.reduce((a, b) => a / b);
  //   console.log(sum);
  // };
  // const isGreater = (convertedToArray: string[]) => {
  //   const valuesToNumbers = convertedToArray.map((value) => {
  //     return Number(value);
  //   });

  //   if (valuesToNumbers[0] > valuesToNumbers[1]) {
  //     console.log(true);
  //   } else {
  //     console.log(false);
  //   }
  // };
  // const isEqual = (convertedToArray: string[]) => {
  //   const valuesToNumbers = convertedToArray.map((value) => {
  //     return Number(value);
  //   });

  //   if (valuesToNumbers[0] === valuesToNumbers[1]) {
  //     console.log(true);
  //   } else {
  //     console.log(false);
  //   }
  // };

  // const negateBooleanValue = (convertedToArray: string[]) => {
  //   const valuesToBoolean = convertedToArray.map((value) => {
  //     if (value === "true") {
  //       console.log(false);
  //     } else if (value === "false") {
  //       console.log(true);
  //     } else {
  //       console.log("error");
  //     }
  //   });
  // };

  // const allAreTrue = (convertedToArray: string[]) => {
  //   const values = convertedToArray.map((value) => {
  //     if (value === "true") {
  //       return true;
  //     } else if (value === "false") {
  //       return false;
  //     } else {
  //       return Number(value);
  //     }
  //   });
  //   console.log(values.every((element) => element == true));
  // };
  // const onlyOneAreTrue = (convertedToArray: string[]) => {
  //   const values = convertedToArray.map((value) => {
  //     if (value === "true") {
  //       return true;
  //     } else if (value === "false") {
  //       return false;
  //     } else {
  //       return Number(value);
  //     }
  //   });
  //   console.log(values.some((element) => element == true));
  // };

  // const concat = (convertedToArray: string[]) => {
  //   console.log(convertedToArray.join(" "));
  // };

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
