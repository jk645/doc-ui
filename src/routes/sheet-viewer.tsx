import { Link, Outlet, useLoaderData } from "react-router-dom";
import Sheet from "../interfaces/sheet";
import getSheet from "../helpers/get-sheet";

export async function loader({ params }: {params: any}): Promise<{sheet: Sheet}> {
  const sheet = await getSheet(params.sheetId);
  return { sheet };
}

export default function SheetViewer() {
  const { sheet } = useLoaderData() as {sheet: Sheet};

  return (
    <>
      <p>This is sheet { sheet.id }</p>
      {
        Object.values(sheet.fields)
          .map((field) => <Link key={field.id} to={field.id}>{field.id}</Link>)
      }
      <Outlet />
    </>
  );
}
