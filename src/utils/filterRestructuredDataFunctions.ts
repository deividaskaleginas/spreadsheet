import { RestructData, SpreadSheetResults } from "../types/dataTypes";
import { calculateSpreadSheetResults } from "./calculateSpreadsheetResults";

export const filterRestructuredDataFunctions = (
  restructData: RestructData,
  submissionUrl: string
) => {
  const spreadSheetResults = restructData.map((sheet) =>
    calculateSpreadSheetResults(sheet)
  );

  const results = {
    email: "deividas.kaleginas@gmail.com",
    results: spreadSheetResults,
  };

  const postDataToServer = () => {
    fetch(submissionUrl, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(results),
    }).then((res) => res.json());
  };

  // postDataToServer();

  return spreadSheetResults;
};
