import {
  Form,
  useLoaderData
} from 'react-router-dom';
import { Button } from "@mui/material";
import { SheetType } from '../types/sheet';
import getSheet from '../helpers/get-sheet';
import saveSheet from '../helpers/save-sheet';
import Sheet from '../components/Sheet';
import formDataToSheet from '../helpers/form-data-to-sheet';

export async function loader(): Promise<{sheet: SheetType|null}> {
  const sheet = await getSheet();
  return { sheet };
}

export async function action({ request }: { request: Request }): Promise<{sheet: SheetType|null}> {
  const formData = await request.formData();
  const sheet = formDataToSheet(formData);
  const updatedSheet = await saveSheet(sheet);
  return { sheet: updatedSheet };
}

export default function Root() {
  const { sheet } = useLoaderData() as {sheet: SheetType|null};

  return (
    <>
      <Form method="post">
        <Button type="submit">Save</Button>
        {sheet && <Sheet sheet={sheet} />}
      </Form>
    </>
  );
}
