import { Dispatch, SetStateAction, useState } from "react";
import FieldInterface from "../interfaces/field";
import DocInterface from "../interfaces/doc";
import updateFieldValue from "../helpers/update-field-value";

export default function Field({ field, doc, setDoc }: { field: FieldInterface, doc: DocInterface, setDoc: Dispatch<SetStateAction<DocInterface>> }) {

  const [value, setValue] = useState(field.value);
  const [timeoutId, setTimeoutId] = useState(0);

  // TODO: have a func like "save" saves this field, back to the doc, calls some helper func to update the doc
  // Could be triggered after focus leaves the field or press enter, or after stop typing some amount of time
  // Point is, using state to make the input element work, but at some point have to save the state back to
  // the doc, thus the overall application state, maybe in future that would be stored in something like react redux

  const saveValue = (newValue: string) => {
    // !!!!!!!! --------->
    // NEXT TODO: do this newDoc stuff in a helper function that also does calc as needed, design doc with formula fields that can reference other fields, types, also remember to have types on literal fields too, and have subscribers list of fieldIds looking at a given field so know what fields need to be re-calc'ed
    // basically doing everything like single sheet first (fields just existing directly in the doc), then  can move to multi-sheet concept later
    const newDoc = updateFieldValue(doc, field.id, newValue);
    setDoc(newDoc);
    console.log(newDoc);
  };

  const handleChange = (newValue: string) => {
    console.log(newValue);
    setValue(newValue);
    console.log(timeoutId);
    clearTimeout(timeoutId);
    setTimeoutId(setTimeout(() => {
      saveValue(newValue);
    }, 3000));
  };

  return (
    <input
      value={value}
      onChange={event => handleChange(event.target.value)}
    />
  );
}
