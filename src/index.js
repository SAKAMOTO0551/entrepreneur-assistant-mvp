import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"; // 必要に応じてCSSファイルを作成してください
import App from "./App"; // Appコンポーネントが存在する場合
import reportWebVitals from "./reportWebVitals"; // 任意のパフォーマンス測定

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals(console.log); // 任意のパフォーマンス測定