import { CellFunctions, Sheet } from "../types/dataTypes";
import { calculateSumAndDestructureSheet } from "./calculateSum";
import { checkConditionals } from "./checkConditionals";
import { checkIfAllParametersAreTrue } from "./checkIfAllParametersAreTrue";
import { checkIfAtLeastOneParameterIsTrue } from "./checkIfAtLeastOneParameterIsTrue";
import { checkIfEqual } from "./checkIfEqual";
import { checkIfIsGreaterThanSecond } from "./checkIfIsGreaterThanSecond";
import { concat } from "./concat";
import { divideSheetAndDestructure } from "./divideSheetDataAndDestructure";
import { fillColumnWithData } from "./fillColumnWithData";
import { multiplySheetDataValues } from "./multiplySheetDataAndDestructure";
import { negateBooleanValue } from "./negateBooleanValue";

export const calculateSpreadSheetResults = (sheetData: Sheet) => {
  const cellFunctionsApplied = sheetData.data.map((dataArray) =>
    dataArray.map((cellValue) => {
      const value = Object.values(cellValue);
      //Removed to string from objectValuesList
      const objectValuesList = Object.values(cellValue).toString();
      if (objectValuesList.includes(CellFunctions.MULTIPLY)) {
        return multiplySheetDataValues(sheetData, cellValue);
      } else if (objectValuesList.includes(CellFunctions.SUM)) {
        return calculateSumAndDestructureSheet(dataArray, cellValue);
      } else if (objectValuesList.includes(CellFunctions.DIVIDE)) {
        return divideSheetAndDestructure(sheetData, cellValue);
      } else if (objectValuesList.includes(CellFunctions.GT)) {
        return checkIfIsGreaterThanSecond(dataArray, cellValue);
      } else if (objectValuesList.includes(CellFunctions.EQ)) {
        return checkIfEqual(sheetData, cellValue);
      } else if (objectValuesList.includes(CellFunctions.NOT)) {
        return negateBooleanValue(sheetData, cellValue);
      } else if (objectValuesList.includes(CellFunctions.AND)) {
        return checkIfAllParametersAreTrue(sheetData, cellValue);
      } else if (objectValuesList.includes(CellFunctions.OR)) {
        return checkIfAtLeastOneParameterIsTrue(sheetData, cellValue);
      } else if (objectValuesList.includes(CellFunctions.CONCAT)) {
        return concat(sheetData, cellValue);
      } else if (objectValuesList.includes(CellFunctions.IF)) {
        return checkConditionals(sheetData, cellValue);
      } else if (objectValuesList.includes("=")) {
        return fillColumnWithData(sheetData, cellValue);
      } else {
        return value[0];
      }
    })
  );

  return { id: sheetData.id, data: cellFunctionsApplied };
};
