import { css } from '@emotion/react';
import Cell from './Cell';
import { SheetType } from '../types/sheet';

export default function Sheet(props: {sheet: SheetType}) {
  const sheet = props.sheet;

  return (
    <form>
      <table
        css={css`
          border: 1px solid;
          border-collapse: collapse;
        `}
      >
        <tbody>
          {sheet.map((row, index) => {
            return (
              <tr key={index}>
                {row.map((cellValue, index) => {
                  return (
                    <Cell key={index} cellValue={cellValue} />
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </form>
  );
};
