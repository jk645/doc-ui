import { css } from '@emotion/react';
import Cell from './Cell';
import { SheetType } from '../types/sheet';
import { SyntheticEvent } from 'react';

export default function Sheet(props: {sheet: SheetType}) {
  const sheet = props.sheet;

  const handleKeyDown = (event: SyntheticEvent) => {
    switch((event as unknown as KeyboardEvent).key) {
      case 'ArrowUp':
        console.log('/\\');
        break;
      case 'ArrowDown':
        console.log('\\/');
        break;
      case 'ArrowLeft':
        console.log('<');
        break;
      case 'ArrowRight':
        console.log('>');
        break;
    }
  };

  return (
    <table
      onKeyDown={(event) => handleKeyDown(event)}
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
