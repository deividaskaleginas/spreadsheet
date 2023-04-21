import { DataArray, FuncData } from "../types/dataTypes";

export const replaceStringsWithData = (
  funcData: FuncData,
  dataArray: DataArray
) => {
  funcData.map((data) => {
    return dataArray.map((obj) => {
      if (Object.keys(obj).toString() === data) {
        const index = funcData.indexOf(data);
        return (funcData[index] = Object.values(obj).toString());
      }
    });
  });
  return funcData.map((value) => {
    return Number(value);
  });
};
