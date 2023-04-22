import { CellFunctions, CellTypes } from "../types/dataTypes";
import { destructureFunction } from "./destructureFunction";
import { replaceStringsWithData } from "./replaceStringsWithData";

type OrParams = {
  [x: string]: CellTypes;
};
export const checkIfAtLeastOneParameterIsTrue = (
  cellsToCheck: OrParams[],
  cellValue: OrParams
) => {
  const funcData = destructureFunction(
    Object.values(cellValue).toString(),
    CellFunctions.OR
  );
  const replacedData = replaceStringsWithData(funcData, cellsToCheck);

  const isTrue = replacedData.includes(true) ? true : false;
  return isTrue;
};
