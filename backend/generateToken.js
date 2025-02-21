const jwt = require("jsonwebtoken");
require("dotenv").config();

// テスト用のユーザー情報を定義（必要に応じて変更）
const user = { id: "testUser", role: "user" };

// JWTを生成（有効期限は1時間）
const token = jwt.sign(user, process.env.JWT_SECRET, { expiresIn: "1h" });
console.log("Generated Token:", token);