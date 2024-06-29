import { SheetType } from "../types/sheet";

export default function formDataToSheet(formData: FormData): SheetType {
  const sheet: SheetType = [];
  const formFields = Object.fromEntries(formData);

  Object.keys(formFields).forEach((fieldName) => {
    const fieldValue = formFields[fieldName]
      ? Number(formFields[fieldName])
      : null;
    setCell(sheet, fieldName, fieldValue);
  });

  return sheet;
}

function setCell(sheet: SheetType, fieldName: string, fieldValue: number|null): SheetType {
  const colIndex = Number(fieldName.match(/\((\d?)\,/)?.[1]) - 1;
  const rowIndex = Number(fieldName.match(/\,(\d?)\)/)?.[1]) - 1;

  if (!Array.isArray(sheet[rowIndex])) {
    sheet[rowIndex] = [];
  }

  const row = sheet[rowIndex];
  row[colIndex] = fieldValue;

  return sheet;
}
