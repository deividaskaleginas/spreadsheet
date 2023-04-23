import { CellFunctions, CellTypes, Sheet } from "../types/dataTypes";
import { destructureFunction } from "./destructureFunction";
import { replaceStringsWithData } from "./replaceStringsWithData";

type OrParams = {
  [x: string]: CellTypes;
};
export const checkIfAtLeastOneParameterIsTrue = (
  sheet: Sheet,
  cellValue: OrParams
) => {
  const sheetDataListsJoined = sheet.data.flat(1);
  const funcData = destructureFunction(
    Object.values(cellValue).toString(),
    CellFunctions.OR
  );

  const replacedData = replaceStringsWithData(funcData, sheetDataListsJoined);

  let isTrue;

  if (replacedData.some((item) => typeof item !== "boolean")) {
    isTrue = "#ERROR: Incompatible types";
  } else if (replacedData.includes(true)) {
    isTrue = true;
  } else {
    isTrue = false;
  }

  return isTrue;
};
