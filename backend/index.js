const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 5010;

// CORSミドルウェアを追加することで、他のオリジン（例: フロントエンドのポート3000）からのリクエストを許可
app.use(cors());

// ミドルウェア設定（例: JSONパース）
app.use(express.json());

// サンプルAPIエンドポイント
app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from the backend!" });
});

// サーバー起動
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});