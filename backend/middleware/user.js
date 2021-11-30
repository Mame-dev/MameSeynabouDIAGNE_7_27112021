const jwt = require('jsonwebtoken');
const conn = require("../connection");
const dotenv = require("dotenv");
dotenv.config();

module.exports = (req, res, next) => {
    const token = req.headers.authorization.split(' ')[1];
    const decodedToken = jwt.verify(token, process.env.DB_TOKEN);
    const userId = decodedToken.userId;

    conn.query('SELECT * FROM user WHERE id =?', req.params.id, (error, result) => {
        if ((result[0].id === userId) || result[0].isAdmin === 1) {
            console.log("action autorisé");
            next();
        } else {
            res.status(403).json({
                message: "Action non autorisé"
            });
        }
    });
};