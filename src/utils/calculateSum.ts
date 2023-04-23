import { CellFunctions, CellObject } from "../types/dataTypes";
import { destructureFunction } from "./destructureFunction";
import { replaceStringsWithData } from "./replaceStringsWithData";

export const calculateSumAndDestructureSheet = (
  cellsToSum: CellObject[],
  cellValue: CellObject
) => {
  const funcData = destructureFunction(
    Object.values(cellValue).toString(),
    CellFunctions.SUM
  );
  const replacedData = replaceStringsWithData(funcData, cellsToSum);
  const replacedElementsToNumbers = replacedData.map((element) => {
    if (typeof element !== "number") {
      return Number(element);
    } else {
      return element;
    }
  });
  const sum = replacedElementsToNumbers.reduce((a, b) => a + b);

  return sum;
};
