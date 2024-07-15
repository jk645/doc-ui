import { useState } from "react";
import DocInterface from "../interfaces/doc";
import Field from "./Field";

// const defaultDoc: DocInterface = {
//   fields: {
//     a: {
//       id: 'a',
//       value: 1
//     },
//     b: {
//       id: 'b',
//       value: 1
//     }
//   }
// };

export default function Doc() {

  // const [doc, setDoc] = useState(defaultDoc);

  return (
    <>
      {/* {
        Object.values(doc.fields)
          .map((field) => <Field key={field.id} field={field} doc={doc} setDoc={setDoc} />)
      } */}
    </>
  );
}