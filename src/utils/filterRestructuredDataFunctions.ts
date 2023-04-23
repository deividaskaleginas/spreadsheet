import { RestructuredData } from "../types/dataTypes";
import { calculateSpreadSheetResults } from "./calculateSpreadsheetResults";

export const filterRestructuredDataFunctions = (
  restructData: RestructuredData,
  submissionUrl: string
) => {
  const spreadSheetResults = restructData.map((sheet) =>
    calculateSpreadSheetResults(sheet)
  );

  // NOTE: Submit results
  // const results = {
  //   email: "deividas.kaleginas@gmail.com",
  //   results: spreadSheetResults,
  // };

  // const postDataToServer = () => {
  //   console.log(submissionUrl);
  //   submissionUrl &&
  //     fetch(submissionUrl, {
  //       method: "POST",
  //       headers: {
  //         "Content-type": "application/json",
  //       },
  //       body: JSON.stringify(results),
  //     })
  //       .then((res) => res.json())
  //       .then((data) => console.log(data))
  //       .catch((err) => console.log(err));
  // };
  // postDataToServer();

  return spreadSheetResults;
};
