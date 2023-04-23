import { CellFunctions, CellTypes, Sheet } from "../types/dataTypes";
import { destructureFunction } from "./destructureFunction";
import { replaceStringsWithData } from "./replaceStringsWithData";

type DivideParams = {
  [x: string]: CellTypes;
};

export const divideSheetAndDestructure = (
  sheet: Sheet,
  cellValue: DivideParams
) => {
  const sheetDataListsJoined = sheet.data.flat(1);
  const funcData = destructureFunction(
    Object.values(cellValue).toString(),
    CellFunctions.DIVIDE
  );
  const replacedData = replaceStringsWithData(funcData, sheetDataListsJoined);

  const sum = Number(replacedData[0]) / Number(replacedData[1]);

  return sum;
};
