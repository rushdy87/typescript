"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express"); // The Router() function is used to create a new router object.
;
const requireAuth = (req, res, next) => {
    if (req.session && req.session.loggedIn) {
        next();
        return;
    }
    res.status(403);
    res.send('Not permitted');
};
const router = (0, express_1.Router)();
exports.router = router;
router.get('/login', (req, res) => {
    res.send(`
    <form method='POST'>
      <div>
        <lable>Email</lable>
        <input name='email' />
      </div>
      <div>
        <lable>Password</lable>
        <input name='password' type='password' />
      </div>
      <button>Submit</button>
    </form>
  `);
});
router.post('/login', (req, res) => {
    const { email, password } = req.body;
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
router.get('/', (req, res) => {
    console.log(req.session);
    if (req.session && req.session.loggedIn) {
        res.send(`
      <div>
        <h1>You are Loged In..</h1>
        <a href="/logout">Logout</a>
      </div>
    `);
    }
    else {
        res.send(`
      <div>
        <h1>You are Not Loged In..</h1>
        <a href="/login">Login</a>
      </div>
    `);
    }
});
router.get('/logout', (req, res) => {
    req.session = undefined;
    res.redirect('/');
});
router.get('/protected', requireAuth, (req, res) => {
    res.send('<h1>Wellcom To Protected rout, Login User!</h1>');
});
