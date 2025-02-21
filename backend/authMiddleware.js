// authMiddleware.js
const jwt = require("jsonwebtoken");

// この関数は、HTTPリクエストのヘッダーに含まれるトークンを検証します。
const authenticateToken = (req, res, next) => {
    // Authorizationヘッダーから"Bearer <token>"の形式でトークンを取得
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];

    // トークンが存在しなければ、認証失敗として401エラーを返す
    if (!token) {
        return res.sendStatus(401); // Unauthorized
    }

    // jwt.verifyでトークンを検証
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) {
            console.error("JWT verification error:", err);
            return res.sendStatus(403); // Forbidden（トークンが無効な場合）
        }
        if (user.role !== "admin") {
            return res.sendStatus(403); // Forbidden（ユーザーが管理者でない場合）
        }
        console.log("Authenticated user:", user);
        req.user = user; // トークンの内容（ユーザー情報）をreqオブジェクトに保存
        next(); // 次のミドルウェアまたはルートハンドラーへ進む
    });
};

module.exports = authenticateToken;