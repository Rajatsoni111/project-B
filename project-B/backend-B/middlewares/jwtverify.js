const jwt = require('jsonwebtoken');
const JWT_SECRET = "dododada";

const verify = (req, res, next) => {
    const { token } = req.headers;
    if (!token) {
        return res.status(400).send("invalid request!");
    }
    try {
        const verify = jwt.verify(token, JWT_SECRET);
        res.locals.user = verify;
        next();
    } catch (error) {
        return res.status(500).send("Something went wrong!");
    }
}

module.exports = verify;