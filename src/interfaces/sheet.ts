import Field from "./field";

export default interface Sheet {
  id: string;
  fields: {
    [fieldId: string]: Field;
  };
}
