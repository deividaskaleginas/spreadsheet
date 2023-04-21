import { CellFunctions, CellTypes } from "../types/dataTypes";
import { destructureFunction } from "./destructureFunction";
import { replaceStringsWithData } from "./replaceStringsWithData";

type SumParams = {
  [x: string]: CellTypes;
};

export const calculateSumAndDestructureSheet = (
  cellsToSum: SumParams[],
  cellValue: SumParams
) => {
  const funcData = destructureFunction(
    Object.values(cellValue).toString(),
    CellFunctions.SUM
  );
  const replacedData = replaceStringsWithData(funcData, cellsToSum);
  const sum = replacedData.reduce((a, b) => a + b);

  return sum;
};
