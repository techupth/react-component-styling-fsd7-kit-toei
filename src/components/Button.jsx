// Start coding here
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export function Button(props) {
  let bgColor;
  if (props.color === "primary") {
    bgColor = "#074EE8";
  } else if (props.color === "secondary") {
    bgColor = "#07A4E8";
  }
  return (
    <button
      css={css`
        display: block;
        background-color: ${bgColor};
        margin: 20px;
        width: 170px;
        height: 50px;
        border: none;
        border-radius: 4px;
        color: white;
        font-weight: 400;
        font-size: 16px;
      `}
    >
      {props.text}
    </button>
  );
}
