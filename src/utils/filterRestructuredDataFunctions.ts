import { RestructData } from "../types/dataTypes";
import { calculateSpreadSheetResults } from "./calculateSpreadsheetResults";

export const filterRestructuredDataFunctions = (restructData: RestructData) => {
  const spreadSheetResults = restructData.map((sheet) =>
    calculateSpreadSheetResults(sheet)
  );
  console.log(spreadSheetResults);

  return spreadSheetResults;
};
