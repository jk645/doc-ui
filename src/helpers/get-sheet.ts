import localforage from "localforage";
import { SheetType } from "../types/sheet";
import { emptySheet } from "./empty-sheet";

export default async function getSheet(): Promise<SheetType|null> {
  try {
    const sheet: SheetType|null = await localforage.getItem('sheet');
    return sheet || structuredClone(emptySheet);
  } catch (error) {
    console.error(error);
    return null;
  }
}
