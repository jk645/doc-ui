export default interface Field {
  id: string;
  value: number|string;
}

export interface FieldUpdates {
  value?: number|string|null;
}
