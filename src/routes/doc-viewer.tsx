import { Outlet, useLoaderData } from "react-router-dom";
import Doc from "../interfaces/doc";
import getDoc from "../helpers/get-doc";

export async function loader({ params }: {params: any}): Promise<{doc: Doc}> {
  const doc = await getDoc(params.docId);
  return { doc };
}

export default function DocViewer() {
  const { doc } = useLoaderData() as {doc: Doc};

  return (
    <>
      <p>This is doc { doc.id }</p>
      <Outlet />
    </>
  );
}
