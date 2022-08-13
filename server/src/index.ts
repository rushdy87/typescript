import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import cookieSession from 'cookie-session';

import { AppRouter } from './AppRouter';
import './controllers/LoginController';
import './controllers/RootControllers';

const app = express(); //const app: Express

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieSession({ name: 'session', keys: ['anyString'] })); // the string in keys to encode the session.
app.use(AppRouter.getInstance());

app.listen(3000, () => {
  console.log('Listening on PORT 3000..');
});