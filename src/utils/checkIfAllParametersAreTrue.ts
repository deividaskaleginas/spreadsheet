import { CellFunctions, CellTypes } from "../types/dataTypes";
import { destructureFunction } from "./destructureFunction";
import { replaceStringsWithData } from "./replaceStringsWithData";

type AndParams = {
  [x: string]: CellTypes;
};

export const checkIfAllParametersAreTrue = (
  cellsToCheck: AndParams[],
  cellValue: AndParams
) => {
  const funcData = destructureFunction(
    Object.values(cellValue).toString(),
    CellFunctions.AND
  );
  const replacedData = replaceStringsWithData(funcData, cellsToCheck);

  const isTrue = replacedData.includes(false) ? false : true;
  return isTrue;
};
