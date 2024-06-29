import localforage from "localforage";
import { SheetType } from "../types/sheet";
import { emptySheet } from "./empty-sheet";

export default async function saveSheet(sheet?: SheetType|null): Promise<SheetType|null> {
  sheet = sheet || structuredClone(emptySheet);
  try {
    const updatedSheet: SheetType|null = await localforage.setItem('sheet', sheet);
    return updatedSheet;
  } catch (error) {
    console.error(error);
    return null;
  }
}
