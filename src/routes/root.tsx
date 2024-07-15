import {
  Form,
  Outlet,
  useLoaderData
} from 'react-router-dom';
import { Button } from "@mui/material";
import { SheetType } from '../types/sheet';
import DocInterface from '../interfaces/doc';
import getSheet from '../helpers/get-sheet';
import getDoc from '../helpers/get-doc';
import saveSheet from '../helpers/save-sheet';
import Field from '../components/Field';
import Sheet from '../components/Sheet';
import formDataToSheet from '../helpers/form-data-to-sheet';
import Doc from '../components/Doc';

export async function loader(): Promise<{sheet: SheetType|null}> {
  const sheet = [[]];//await getSheet();
  // const doc = await getDoc();
  return { sheet };
}

export async function action({ request }: { request: Request }): Promise<{sheet: SheetType|null}> {
  const formData = await request.formData();

  switch (formData.get('action')) {
    case 'UPDATE_FIELD_VALUE':
      // TODO: call a helper func, will clone the doc, change the specified field's value, perform any needed re-calcs, save the new doc in localforage
      console.log(formData);
      break;
  }

  const sheet = formDataToSheet(formData);
  const updatedSheet = await saveSheet(sheet);
  return { sheet: updatedSheet };
}

export default function Root() {
  // const { sheet, doc } = useLoaderData() as {sheet: SheetType|null, doc: DocInterface};

  return (
    <>
      <Outlet />
      <Doc />
      {/* TODO: keep state in sheets doc object, design Field interface so can pass the value etc. should always have "value" make formula field this too, just has extra field for formula def */}
      {/* Maybe component name should be like FieldComp so that can use Field for the interface */}
      {/* Inside field onChange event should call something in a helper function that updates the sheets doc.
      All updates locally, mock API call in the side to inform of changes but not pass the calc (that happens as chron job) */}
      {/* {
        Object.values(doc.fields)
          .map((field) => <Field key={field.id} field={field} />)
      } */}
      {/* <Form method="post">
        <Button type="submit">Save</Button>
        {sheet && <Sheet sheet={sheet} />}
      </Form> */}
    </>
  );
}
