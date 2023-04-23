import { DataArray, FuncData } from "../types/dataTypes";

// NOTE: this function replaces functions string with calculated data
export const replaceStringsWithData = (
  funcData: FuncData,
  dataArray: DataArray
): FuncData => {
  funcData.map((data) => {
    return dataArray.map((obj) => {
      const value = Object.values(obj);
      if (Object.keys(obj).toString() === data) {
        const index = funcData.indexOf(data);
        return (funcData[index] = value[0]);
      } else {
        return obj;
      }
    });
  });
  return funcData;
};
