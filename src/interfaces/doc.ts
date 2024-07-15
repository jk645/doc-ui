import Sheet from "./sheet";

export default interface Doc {
  id: string;
  sheets: {
    [sheetId: string]: Sheet;
  };
}
