import { CellFunctions, CellTypes, Sheet } from "../types/dataTypes";
import { destructureFunction } from "./destructureFunction";
import { replaceStringsWithData } from "./replaceStringsWithData";

type AndParams = {
  [x: string]: CellTypes;
};

export const checkIfAllParametersAreTrue = (
  sheet: Sheet,
  cellValue: AndParams
) => {
  const sheetDataListsJoined = sheet.data.flat(1);
  const funcData = destructureFunction(
    Object.values(cellValue).toString(),
    CellFunctions.AND
  );
  const replacedData = replaceStringsWithData(funcData, sheetDataListsJoined);

  let isTrue;

  if (replacedData.some((item) => typeof item !== "boolean")) {
    isTrue = "#ERROR: Incompatible types";
  } else if (replacedData.includes(false)) {
    isTrue = false;
  } else {
    isTrue = true;
  }
  return isTrue;
};
