import React from "react";
import Colorfulmessage from "./components/ColorfulMessage";

const App = () => {
  const onClickButton = () => {
    alert("a");
  };

  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは</h1>
      <Colorfulmessage color="orange">お元気ですか！</Colorfulmessage>
      <Colorfulmessage color="pink">お元気ですか2！</Colorfulmessage>
      <button onClick={onClickButton}>ボタン</button>
    </>
  );
};

export default App;
