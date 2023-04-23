import { CellObject, CellTypes, Sheet } from "../types/dataTypes";

type CellStringType = {
  [x: string]: string;
};

export const fillColumnWithData = (sheet: Sheet, cellValue: CellObject) => {
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
      let objectValue = obj[key];
      while (keys.includes(objectValue)) {
        // eslint-disable-next-line no-loop-func
        const checkIfKeyHasValue = arr.find((o) =>
          o.hasOwnProperty(objectValue)
        );
        if (checkIfKeyHasValue) {
          objectValue = checkIfKeyHasValue[objectValue];
        }
      }
      return { [key]: objectValue };
    });
  };

  const replacedValuesOfSheetData = replaceValues(
    removedEqualsFromObjectValues
  );

  const allValuesInOneObject: CellObject = Object.assign(
    {},
    ...replacedValuesOfSheetData
  );

  const cellValueReplaced: CellTypes =
    allValuesInOneObject[Object.keys(cellValue)[0]];

  return cellValueReplaced;
};
