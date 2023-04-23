import {
  CellFunctions,
  CellObject,
  CellTypes,
  Sheet,
} from "../types/dataTypes";
import { destructureFunction } from "./destructureFunction";
import { replaceStringsWithData } from "./replaceStringsWithData";

export const multiplySheetDataValues = (
  sheet: Sheet,
  cellValue: CellObject
): CellTypes => {
  const sheetDataListsJoined = sheet.data.flat(1);
  const funcData = destructureFunction(
    Object.values(cellValue).toString(),
    CellFunctions.MULTIPLY
  );
  const replacedData = replaceStringsWithData(funcData, sheetDataListsJoined);
  const multipliedValue = replacedData.reduce((a, b) => Number(a) * Number(b));

  return multipliedValue;
};
