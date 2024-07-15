import localforage from "localforage";
import Doc from "../interfaces/doc";
import Sheet from "../interfaces/sheet";
import Field, { FieldUpdates } from "../interfaces/field";

export default async function updateField(sheetId: string, fieldId: string, updates: FieldUpdates): Promise<Field> {
  const doc: Doc|null = await localforage.getItem('doc');
  if (!doc) throw new Error('Document not found in local cache.');

  const sheet: Sheet = doc.sheets[sheetId];
  if (!sheet) throw new Error('Sheet not found in document.');

  const field: Field = sheet.fields[fieldId];
  if (!field) throw new Error('Field not found in sheet.');

  Object.assign(field, updates);
  // TODO: should probably make an API call to server in here to update doc on server
  // Perhaps server returns updated doc, then cache what server returns in localforage
  await localforage.setItem('doc', doc);  // IDEA: perhaps before put doc into localforage, could perform calc then (would do the same inside of get-doc.ts too)

  return field;
}
