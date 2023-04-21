import { CellFunctions, CellTypes } from "../types/dataTypes";
import { destructureFunction } from "./destructureFunction";
import { replaceStringsWithData } from "./replaceStringsWithData";

type GTParams = {
  [x: string]: CellTypes;
};

export const checkIfIsGreaterThanSecond = (
  cellsToCheck: GTParams[],
  cellValue: GTParams
) => {
  const funcData = destructureFunction(
    Object.values(cellValue).toString(),
    CellFunctions.GT
  );
  const replacedData = replaceStringsWithData(funcData, cellsToCheck);
  const checked = replacedData[0] > replacedData[1] ? true : false;

  return checked;
};
