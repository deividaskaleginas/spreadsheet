export const destructureFunction = (func: string, funcName: string) => {
  return func
    .replace(funcName, "")
    .replaceAll(" ", "")
    .replaceAll('"', "")
    .replaceAll("(", "")
    .replaceAll(")", "")
    .split(",");
};
