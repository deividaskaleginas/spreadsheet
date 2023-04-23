import { CellFunctions, CellObject, Sheet } from "../types/dataTypes";
import { destructureFunction } from "./destructureFunction";
import { replaceStringsWithData } from "./replaceStringsWithData";

export const checkIfEqual = (sheet: Sheet, cellValue: CellObject): boolean => {
  const sheetDataListsJoined = sheet.data.flat(1);
  const funcData = destructureFunction(
    Object.values(cellValue).toString(),
    CellFunctions.EQ
  );
  const replacedData = replaceStringsWithData(funcData, sheetDataListsJoined);
  const checked = replacedData[0] === replacedData[1] ? true : false;

  return checked;
};
