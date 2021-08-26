// esliintの機能をページ単位？でオフにできる。
/* eslint react-hooks/exhaustive-deps:off */

import React, { useEffect, useState } from "react";
import { ColorfulMessage } from "./components/ColorfulMessage";

const App = () => {
  console.log("App");
  const [num, setNum] = useState(0);
  const [showFlag, setShowFlag] = useState(false);
  const onClickCountUp = () => {
    setNum(num + 1);
  };

  const onClickSwitchShow = () => {
    // 今のshowFlagの逆をセットする
    setShowFlag(!showFlag);
  };

  // 第2引数の配列に指定した値が変更された場合、第１引数の関数が実行される。
  // 第2引数の配列に何も指定しなければ、最初にレンダリングされたときだけ実行される。
  useEffect(() => {
    if (num > 0) {
      if (num % 3 === 0) {
        showFlag || setShowFlag(true);
      } else {
        showFlag && setShowFlag(false);
      }
    }
    // 第2引数の配列に、条件となるshowFlagを書いていないと、eslintからメッセージがでる。
    // ただし、今回の場合はあえてshowflagを見ていないので、エラーは無視する。設定でoffにもできる。
  }, [num]);

  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは</h1>
      <ColorfulMessage color="orange">お元気ですか！</ColorfulMessage>
      {/* <ColorfulMessage color="pink">お元気ですか2！</ColorfulMessage> */}
      <button onClick={onClickCountUp}>ボタン</button>
      <br />
      <button onClick={onClickSwitchShow}>on/off</button>
      <p>{num}</p>
      {/* 左辺がtrueの場合に、右を返す */}
      {showFlag && <span>aaaaaaaa</span>}
    </>
  );
};

export default App;
