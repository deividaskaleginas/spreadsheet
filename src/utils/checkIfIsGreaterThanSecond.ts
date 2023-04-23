import { CellFunctions, CellObject } from "../types/dataTypes";
import { destructureFunction } from "./destructureFunction";
import { replaceStringsWithData } from "./replaceStringsWithData";

export const checkIfIsGreaterThanSecond = (
  cellsToCheck: CellObject[],
  cellValue: CellObject
): boolean => {
  const funcData = destructureFunction(
    Object.values(cellValue).toString(),
    CellFunctions.GT
  );
  const replacedData = replaceStringsWithData(funcData, cellsToCheck);
  const checked = replacedData[0] > replacedData[1] ? true : false;

  return checked;
};
