import Field from "../interfaces/field";
import getField from "../helpers/get-field";
import updateField from "../helpers/update-field";
import { Form, useLoaderData } from "react-router-dom";

export async function action({ request, params }: {request: any, params: any}) {
  const formData = await request.formData();
  const updates = Object.fromEntries(formData);
  const field = await updateField(params.sheetId, params.fieldId, updates);
  return { field };
}

export async function loader({ params }: {params: any}): Promise<{field: Field}> {
  const field = await getField(params.sheetId, params.fieldId);
  return { field };
}

export default function FieldDetails() {
  const { field } = useLoaderData() as {field: Field};

  return (
    <div key={field.id}>
      <p>This is field { field.id }</p>
      <Form method="post">
        <label>
          <span>Value</span>
          <input
            type="text"
            name="value"
            defaultValue={field.value}
          />
        </label>
        <p>
          <button type="submit">Save</button>
        </p>
      </Form>
    </div>
  );
}
