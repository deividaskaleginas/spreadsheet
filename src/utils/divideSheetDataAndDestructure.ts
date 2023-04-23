import { CellFunctions, CellObject, Sheet } from "../types/dataTypes";
import { destructureFunction } from "./destructureFunction";
import { replaceStringsWithData } from "./replaceStringsWithData";

export const divideSheetAndDestructure = (
  sheet: Sheet,
  cellValue: CellObject
): number => {
  const sheetDataListsJoined = sheet.data.flat(1);
  const funcData = destructureFunction(
    Object.values(cellValue).toString(),
    CellFunctions.DIVIDE
  );
  const replacedData = replaceStringsWithData(funcData, sheetDataListsJoined);

  const dividedResult = Number(replacedData[0]) / Number(replacedData[1]);

  return dividedResult;
};
