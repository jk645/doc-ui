import DocInterface from "../interfaces/doc";

export default function updateFieldValue(doc: DocInterface, fieldId: string, fieldValue: any): DocInterface {
  const newDoc = structuredClone(doc);
  // newDoc.fields[fieldId].value = fieldValue;
  return newDoc;
}
