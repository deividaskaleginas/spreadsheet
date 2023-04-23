import { RestructuredData, SheetData } from "../types/dataTypes";
import { alphabet } from "./alphabet";
import { filterRestructuredDataFunctions } from "./filterRestructuredDataFunctions";

export const restructureData = (
  data: SheetData[],
  submissionUrl: string
): SheetData[] | undefined => {
  if (data !== undefined) {
    const restructData: RestructuredData = data.map((sheetData) => ({
      id: sheetData.id,
      data: sheetData.data.map((item, i) =>
        item.map((element, index) => ({
          [`${alphabet[index]}${i + 1}`]: element,
        }))
      ),
    }));
    const restructuredSheetsCells = filterRestructuredDataFunctions(
      restructData,
      submissionUrl
    );

    return restructuredSheetsCells;
  } else {
    console.log("Data undefined");
  }
};
