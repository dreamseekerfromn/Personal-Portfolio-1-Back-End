const session = require('express-session');

const sessionMiddleware = session({
    secret: "changeit",
    resave: true,
    saveUninitialized: true,
});

const ioMiddle =
    (req, res, next) => {
        req.io = io;
        next();
    };

module.exports = {
    sessionMiddleware,
    ioMiddle,
}