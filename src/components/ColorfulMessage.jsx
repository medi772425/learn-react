import React from "react";
export const ColorfulMessage = (props) => {
  console.log("カラフル");

  // タグ内の文字列はchildrenプロパティに格納される
  const { color, children } = props;

  const contentStyle = {
    color: color,
    fontSize: "18px"
  };

  return <p style={contentStyle}>{children}</p>;
};
