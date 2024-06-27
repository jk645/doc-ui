import localforage from "localforage";
import { SheetType } from "../types/sheet";

const emptySheet: SheetType = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default async function getSheet(): Promise<SheetType|null> {
  try {
    const sheet: SheetType|null = await localforage.getItem('sheet');
    return sheet || emptySheet;
  } catch (error) {
    console.error(error);
    return null;
  }
}
