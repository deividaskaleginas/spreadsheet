import { DataArray, FuncData } from "../types/dataTypes";

export const replaceStringsWithData = (
  funcData: FuncData,
  dataArray: DataArray
) => {
  funcData.map((data) => {
    return dataArray.map((obj) => {
      const value = Object.values(obj);
      if (Object.keys(obj).toString() === data) {
        const index = funcData.indexOf(data);
        return (funcData[index] = value[0]);
      }
    });
  });
  return funcData;
};
