import { CellFunctions, CellTypes } from "../types/dataTypes";
import { destructureFunction } from "./destructureFunction";
import { replaceStringsWithData } from "./replaceStringsWithData";

type DivideParams = {
  [x: string]: CellTypes;
};

export const divideSheetAndDestructure = (
  cellsToDivide: DivideParams[],
  cellValue: DivideParams
) => {
  const funcData = destructureFunction(
    Object.values(cellValue).toString(),
    CellFunctions.DIVIDE
  );
  const replacedData = replaceStringsWithData(funcData, cellsToDivide);
  const sum = replacedData.reduce((a, b) => a / b);

  return sum;
};
