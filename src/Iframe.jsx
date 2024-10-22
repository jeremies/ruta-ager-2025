import * as React from "react";

export default function Iframe({ src }) {
  return (
    <iframe
      style={{ width: "80vw", height: "calc(2 * (80vw) /3)" }}
      src={src}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; "
    ></iframe>
  );
}
