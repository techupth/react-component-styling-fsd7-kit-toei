// Start coding here
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import ImageError from "./IMG/error.png";
import ImageInfo from "./IMG/info.png";
import Imagesuccess from "./IMG/success.png";
import ImageWarning from "./IMG/warning.png";

export function Alert(props) {
  let bgColorBox;
  let ImageSrc;
  if (props.typealert === "error") {
    bgColorBox = "#F9C8C8";
    ImageSrc = ImageError;
  } else if (props.typealert === "warning") {
    bgColorBox = "#F9D9C8";
    ImageSrc = ImageWarning;
  } else if (props.typealert === "info") {
    bgColorBox = "#F9EBC8";
    ImageSrc = ImageInfo;
  } else if (props.typealert === "success") {
    bgColorBox = "#CEF7CD";
    ImageSrc = Imagesuccess;
  }
  return (
    <div
      css={css`
        display: flex;
        align-items: center;
        gap: 15px;
        background-color: ${bgColorBox};
        margin: 20px;
        width: 650px;
        height: 76px;
        border: none;
        border-radius: 4px;
        color: #444444;
        font-weight: 700;
        font-size: 20px;
        font-family: "Kanit", sans-serif;
      `}
    >
      <img
        src={ImageSrc}
        alt=""
        css={css`
          padding-left: 20px;
        `}
      />
      {props.text}
    </div>
  );
}
