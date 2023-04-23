import { CellFunctions, CellTypes, Sheet } from "../types/dataTypes";
import { destructureFunction } from "./destructureFunction";
import { replaceStringsWithData } from "./replaceStringsWithData";

type ConcatParams = {
  [x: string]: CellTypes;
};

export const concat = (sheet: Sheet, cellValue: ConcatParams) => {
  const sheetDataListsJoined = sheet.data.flat(1);
  const funcData = destructureFunction(
    Object.values(cellValue).toString(),
    CellFunctions.CONCAT
  );

  let replacedData: any[] = [];
  let concated: string | undefined = "";

  if (sheetDataListsJoined.length > 1) {
    replacedData = replaceStringsWithData(funcData, sheetDataListsJoined);
    concated = replacedData.join(" ");
  } else {
    const regex = /"([^"]*)"/g;
    const matches = Object.values(cellValue).toString().match(regex);
    const valuesArray = matches?.map((match) => match.replace(/"/g, ""));
    concated = valuesArray?.join("");
  }

  return concated;
};
