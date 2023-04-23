import { CellTypes, Sheet } from "../types/dataTypes";
import { replaceStringsWithData } from "./replaceStringsWithData";

type CellValue = {
  [x: string]: CellTypes;
};
export const checkConditionals = (sheet: Sheet, cellValue: CellValue) => {
  const sheetDataListsJoined = sheet.data.flat(1);
  const destructuredFunction: string[] = Object.values(cellValue)
    .toString()
    .replace("=IF", "")
    .replaceAll("(", "")
    .replaceAll(")", "")
    .replace("GT", "")
    .replaceAll(" ", "")
    .split(",");

  const funcData = [...new Set(destructuredFunction)];

  const replacedData = replaceStringsWithData(funcData, sheetDataListsJoined);

  const checked =
    replacedData[0] > replacedData[1] ? replacedData[0] : replacedData[1];

  return checked;
};
