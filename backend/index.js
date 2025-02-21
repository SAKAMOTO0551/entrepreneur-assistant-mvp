const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 5010;
const authenticateToken = require("./authMiddleware");


require("dotenv").config(); // .envファイルの読み込み

app.use(cors()); // CORSミドルウェアを追加することで、他のオリジン（例: フロントエンドのポート3000）からのリクエストを許可
app.use(express.json()); // ミドルウェア設定（例: JSONパース）

// 保護されたAPI（まずは認証なしでテスト）
app.get("/api/protected", authenticateToken, (req, res) => {
  res.json({ message: "Protected API works!", user: req.user });
});

// サンプルAPIエンドポイント
app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from the backend!" });
});

// サーバー起動
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});