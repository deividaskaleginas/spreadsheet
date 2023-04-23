import { useEffect, useState } from "react";
import "./App.css";
import { ResultsBlock } from "./components/resultsBlock/ResultsBlock";
import { SheetData, SubmissionUrl } from "./types/dataTypes";
import { getData } from "./utils/getDataFromAPI";
import { restructureData } from "./utils/restructureDataFromAPI";

function App() {
  const [data, setData] = useState<SheetData[]>([]);
  const [submissionUrl, setSubmissionUrl] = useState<SubmissionUrl>("");

  const cells = restructureData(data, submissionUrl);
  const [sheetToShow, setSheetToShow] = useState<SheetData | undefined>(
    undefined
  );

  useEffect(() => {
    getData(setData, setSubmissionUrl);
  }, []);

  const handleSheetClick = (sheetId: string) => {
    const filteredSheet: SheetData | undefined = cells?.find(
      ({ id }) => id === sheetId
    );
    if (filteredSheet !== undefined) {
      setSheetToShow(filteredSheet);
    }
  };

  return (
    <div className="spreadsheet">
      <ResultsBlock data={sheetToShow?.data} />
      <div className="sheets-wrapper">
        {cells?.map(({ id }) => (
          <div
            key={id}
            onClick={() => handleSheetClick(id)}
            className="sheet-box"
          >
            {id}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
