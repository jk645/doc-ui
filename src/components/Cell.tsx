import { css } from '@emotion/react';

export default function Cell(props: {x: number, y: number, cellValue: number|null}) {
  const x = props.x;
  const y = props.y;
  const cellValue = props.cellValue;

  return (
    <td
      key={cellValue}
      css={css`
        border: 1px solid;
        padding: 0;
      `}
    >
      <input
        name={`cell(${x},${y})`}
        type="number"
        defaultValue={String(cellValue)}
        css={css`
          appearance: none;
          background-color: transparent;
          border: 1px solid transparent;
          border-radius: 0;
          width: 6em;
          height: 2em;

          &:focus {
            background-color: rgba(0,0,255,0.08);
            border: 1px solid rgba(0,0,255,0.5);
            outline-style: none;
          }
        `}
      />
    </td>
  );
};
