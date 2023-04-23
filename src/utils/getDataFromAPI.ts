import { SheetData, SpreadSheetResponse } from "../types/dataTypes";

export const getData = async (
  setData: React.Dispatch<React.SetStateAction<SheetData[]>>,
  setSubmissionUrl: React.Dispatch<React.SetStateAction<string>>
): Promise<void> => {
  try {
    await fetch(
      "https://www.wix.com/_serverless/hiring-task-spreadsheet-evaluator/sheets"
    )
      .then((res) => res.json())
      .then((data: SpreadSheetResponse) => {
        setData(data.sheets);
        setSubmissionUrl(data.submissionUrl);
      });
  } catch (error) {
    console.log(error);
  }
};
