import { CellFunctions, CellObject, Sheet } from "../types/dataTypes";
import { destructureFunction } from "./destructureFunction";
import { replaceStringsWithData } from "./replaceStringsWithData";

export const negateBooleanValue = (
  sheet: Sheet,
  cellValue: CellObject
): boolean => {
  const sheetDataListsJoined = sheet.data.flat(1);
  const funcData = destructureFunction(
    Object.values(cellValue).toString(),
    CellFunctions.NOT
  );
  const replacedData = replaceStringsWithData(funcData, sheetDataListsJoined);

  return !replacedData[0];
};
