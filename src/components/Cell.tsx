import { css } from '@emotion/react';

export default function Cell(props: {cellValue: number|null}) {
  const cellValue = props.cellValue;

  // TODO: Whenever looses focus or press enter, that's when call action to update, but use way that don't change route

  // !!! ACTUALLY, just realized, I need to wrap whole table with <Form> and use <input>'s within each cell, submit will handle form fields etc.

  return (
    <td
      css={css`
        border: 1px solid;
        padding: 0;
      `}
    >
      <input
        type="number"
        defaultValue={Number.isNaN(cellValue) ? '' : String(cellValue)}
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
