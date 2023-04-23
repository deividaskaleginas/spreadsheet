import { CellTypes, Sheet } from "../types/dataTypes";

type FillParams = {
  [x: string]: CellTypes;
};

type CellStringType = {
  [x: string]: string;
};

export const fillColumnWithData = (sheet: Sheet, cellValue: FillParams) => {
  const sheetDataListsJoined = sheet.data.flat(
    1
  ) as unknown as CellStringType[];

  const removedEqualsFromObjectValues = sheetDataListsJoined.map((item) => {
    return {
      [Object.keys(item).toString()]:
        typeof Object.values(item)[0] === "string"
          ? Object.values(item).toString().replace("=", "")
          : Object.values(item)[0],
    };
  });

  const replaceValues = (arr: CellStringType[]) => {
    const keys = arr.map((obj) => Object.keys(obj)[0]);
    return arr.map((obj) => {
      const key = Object.keys(obj)[0];
      let value = obj[key];
      while (keys.includes(value)) {
        //   @ts-ignore
        value = arr.find((o) => o.hasOwnProperty(value))[value];
      }
      return { [key]: value };
    });
  };

  const replacedValuesOfSheetData = replaceValues(
    removedEqualsFromObjectValues
  );

  const allValuesInOneObject = Object.assign({}, ...replacedValuesOfSheetData);

  const cellValueReplaced = allValuesInOneObject[Object.keys(cellValue)[0]];

  return cellValueReplaced;
};
