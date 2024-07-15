import localforage from "localforage";
import Doc from "../interfaces/doc";
import Sheet from "../interfaces/sheet";
import Field from "../interfaces/field";

export default async function getField(sheetId: string, fieldId: string): Promise<Field> {
  const doc: Doc|null = await localforage.getItem('doc');
  if (!doc) throw new Error('Document not found in local cache.');

  const sheet: Sheet = doc.sheets[sheetId];
  if (!sheet) throw new Error('Sheet not found in document.');

  const field: Field = sheet.fields[fieldId];
  if (!field) throw new Error('Field not found in sheet.');
  
  return field;
}
