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

  const keyValuePairs: CellStringType = {};

  removedEqualsFromObjectValues.forEach((obj: CellStringType) => {
    Object.entries(obj).forEach(([key, value]) => {
      if (keyValuePairs.hasOwnProperty(value)) {
        obj[key] = keyValuePairs[value];
      } else if (obj.hasOwnProperty(value)) {
        obj[key] = obj[value];
      }
    });

    Object.entries(obj).forEach(([key, value]) => {
      keyValuePairs[key] = value;
    });
  });

  const cellValueReplaced = keyValuePairs[Object.keys(cellValue)[0]];

  return cellValueReplaced;
};
