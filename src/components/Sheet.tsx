import { css } from '@emotion/react';
import Cell from './Cell';
import { SheetType } from '../types/sheet';

export default function Sheet(props: {sheet: SheetType}) {
  const sheet = props.sheet;

  return (
    <table
      css={css`
        border: 1px solid;
        border-collapse: collapse;
      `}
    >
      <tbody>
        {sheet.map((row, rowIndex) => {
          return (
            <tr key={rowIndex}>
              {row.map((cellValue, colIndex) => {
                return (
                  <Cell
                    key={colIndex}
                    x={colIndex + 1}
                    y={rowIndex + 1}
                    cellValue={cellValue}
                  />
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
