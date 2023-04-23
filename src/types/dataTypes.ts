export type CellTypes = string | number | boolean;

export interface SheetData {
  id: string;
  data: Array<Array<CellTypes>>;
}

export type CellObject = {
  // NOTE: for replaced values e.g. {A1: '=B1'}
  [x: string]: CellTypes;
};

export type SubmissionUrl = string;

export interface SpreadSheetResponse {
  sheets: SheetData[];
  submissionUrl: string;
}

export type Sheet = {
  id: string;
  data: CellObject[][];
};

export type RestructuredData = Sheet[];

export type FuncData = CellTypes[];

export type DataArray = {
  [x: string]: CellTypes;
}[];

export enum CellFunctions {
  SUM = "=SUM",
  MULTIPLY = "=MULTIPLY",
  DIVIDE = "=DIVIDE",
  GT = "=GT",
  EQ = "=EQ",
  NOT = "=NOT",
  AND = "=AND",
  OR = "=OR",
  IF = "=IF",
  CONCAT = "=CONCAT",
}

export enum ErrorMessage {
  INCOMPATIBLE_TYPES = "#ERROR: Incompatible types",
  COMMON = "ERROR",
}
