import { CellFunctions, CellTypes, Sheet } from "../types/dataTypes";
import { destructureFunction } from "./destructureFunction";
import { replaceStringsWithData } from "./replaceStringsWithData";

type NegateParams = {
  [x: string]: CellTypes;
};

export const negateBooleanValue = (sheet: Sheet, cellValue: NegateParams) => {
  const sheetDataListsJoined = sheet.data.flat(1);
  const funcData = destructureFunction(
    Object.values(cellValue).toString(),
    CellFunctions.NOT
  );
  const replacedData = replaceStringsWithData(funcData, sheetDataListsJoined);

  return !replacedData[0];
};
