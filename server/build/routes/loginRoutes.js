"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
var express_1 = require("express"); // The Router() function is used to create a new router object.
;
var requireAuth = function (req, res, next) {
    if (req.session && req.session.loggedIn) {
        next();
        return;
    }
    res.status(403);
    res.send('Not permitted');
};
var router = (0, express_1.Router)();
exports.router = router;
router.post('/login', function (req, res) {
    var _a = req.body, email = _a.email, password = _a.password;
    if (email && password && email === 'test@test.com' && password === '1234') {
        if (req.session) {
            req.session.loggedIn = true;
            res.redirect('/');
        }
    }
    else {
        res.send('<h1>Invalid email or password!</h1>');
    }
});
router.get('/', function (req, res) {
    console.log(req.session);
    if (req.session && req.session.loggedIn) {
        res.send("\n      <div>\n        <h1>You are Loged In..</h1>\n        <a href=\"/logout\">Logout</a>\n      </div>\n    ");
    }
    else {
        res.send("\n      <div>\n        <h1>You are Not Loged In..</h1>\n        <a href=\"/login\">Login</a>\n      </div>\n    ");
    }
});
router.get('/logout', function (req, res) {
    req.session = undefined;
    res.redirect('/');
});
router.get('/protected', requireAuth, function (req, res) {
    res.send('<h1>Wellcom To Protected rout, Login User!</h1>');
});
