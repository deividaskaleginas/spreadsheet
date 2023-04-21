export type CellTypes = string | number | boolean;

export interface SheetData {
  id: string;
  data: Array<Array<CellTypes>>;
}

export interface SpreadSheetResponse {
  sheets: SheetData[];
  submissionUrl: string;
}

export type RestructuredData = {
  id: string;
  data: { [x: string]: CellTypes }[][];
}[];

export type RestructData = {
  id: string;
  data: {
    [x: string]: CellTypes;
  }[][];
}[];

export type Sheet = {
  id: string;
  data: {
    [x: string]: CellTypes;
  }[][];
};

export type FuncData = string[];

export type DataArray = {
  [x: string]: CellTypes;
}[];

//TODO: Alpabetically type for string
export type SpreadSheetStructure = Record<string, CellTypes>;

export enum CellFunctions {
  SUM = "=SUM",
  MULTIPLY = "=MULTIPLY",
  DIVIDE = "=DIVIDE",
}
