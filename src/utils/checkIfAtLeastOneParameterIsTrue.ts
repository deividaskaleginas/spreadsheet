import {
  CellFunctions,
  CellObject,
  ErrorMessage,
  Sheet,
} from "../types/dataTypes";
import { destructureFunction } from "./destructureFunction";
import { replaceStringsWithData } from "./replaceStringsWithData";

export const checkIfAtLeastOneParameterIsTrue = (
  sheet: Sheet,
  cellValue: CellObject
): boolean | string => {
  const sheetDataListsJoined = sheet.data.flat(1);
  const funcData = destructureFunction(
    Object.values(cellValue).toString(),
    CellFunctions.OR
  );

  const replacedData = replaceStringsWithData(funcData, sheetDataListsJoined);

  let isTrue;

  if (replacedData.some((item) => typeof item !== "boolean")) {
    isTrue = ErrorMessage.INCOMPATIBLE_TYPES;
  } else if (replacedData.includes(true)) {
    isTrue = true;
  } else {
    isTrue = false;
  }

  return isTrue;
};
