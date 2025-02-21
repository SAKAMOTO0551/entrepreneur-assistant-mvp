require("dotenv").config();
const jwt = require("jsonwebtoken");

// テスト用のユーザー情報を定義（必要に応じて変更）
const user = { id: "testUser", role: "admin" };

// JWTを生成（有効期限は1時間）
const token = jwt.sign(user, process.env.JWT_SECRET, { expiresIn: "1h", algorithm: "HS256"});
console.log("Generated Token:", token);