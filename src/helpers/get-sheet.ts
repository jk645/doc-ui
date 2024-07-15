import localforage from "localforage";
import Doc from "../interfaces/doc";
import Sheet from "../interfaces/sheet";

export default async function getSheet(sheetId: string): Promise<Sheet> {
  const doc: Doc|null = await localforage.getItem('doc');
  if (!doc) throw new Error('Document not found in local cache.');

  const sheet: Sheet = doc.sheets[sheetId];
  if (!sheet) throw new Error('Sheet not found in document.');
  
  return sheet;
}
