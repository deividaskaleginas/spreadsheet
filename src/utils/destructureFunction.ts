export const destructureFunction = (func: string, funcName: string): string[] =>
  func
    .replace(funcName, "")
    .replaceAll(" ", "")
    .replaceAll('"', "")
    .replaceAll("(", "")
    .replaceAll(")", "")
    .split(",");
