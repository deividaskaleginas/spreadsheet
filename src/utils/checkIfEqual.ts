import { CellFunctions, CellTypes } from "../types/dataTypes";
import { destructureFunction } from "./destructureFunction";
import { replaceStringsWithData } from "./replaceStringsWithData";

type EqualParams = {
  [x: string]: CellTypes;
};

export const checkIfEqual = (
  cellsToCheck: EqualParams[],
  cellValue: EqualParams
) => {
  const funcData = destructureFunction(
    Object.values(cellValue).toString(),
    CellFunctions.EQ
  );
  const replacedData = replaceStringsWithData(funcData, cellsToCheck);
  const checked = replacedData[0] === replacedData[1] ? true : false;

  return checked;
};
