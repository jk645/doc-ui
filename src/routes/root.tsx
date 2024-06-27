import { useLoaderData } from 'react-router-dom';
import { Button } from "@mui/material";
import getSheet from '../helpers/get-sheet';
import Sheet from '../components/Sheet';
import { SheetType } from '../types/sheet';

export async function loader(): Promise<{sheet: SheetType|null}> {
  const sheet = await getSheet();
  return { sheet };
}

// TODO: need action for saving and updating 2D array in localforage

export default function Root() {
  const { sheet } = useLoaderData() as {sheet: SheetType|null};

  return (
    <>
      <p>
        <Button
          onClick={() => {
            alert('YO!');
          }}
        >
          Click Me!
        </Button>
      </p>
      {sheet && <Sheet sheet={sheet} />}
    </>
  );
}
