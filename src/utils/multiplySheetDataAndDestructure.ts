import { CellFunctions, CellTypes, Sheet } from "../types/dataTypes";
import { destructureFunction } from "./destructureFunction";
import { replaceStringsWithData } from "./replaceStringsWithData";

type MultiplyParams = {
  [x: string]: CellTypes;
};

export const multiplySheetDataValues = (
  sheet: Sheet,
  cellValue: MultiplyParams
) => {
  const sheetDataListsJoined = sheet.data.flat(1);
  const funcData = destructureFunction(
    Object.values(cellValue).toString(),
    CellFunctions.MULTIPLY
  );
  const replacedData = replaceStringsWithData(funcData, sheetDataListsJoined);
  const multipliedValue = replacedData.reduce((a, b) => a * b);

  return multipliedValue;
};
