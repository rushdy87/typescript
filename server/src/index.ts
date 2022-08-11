import express, { Request, Response } from 'express'; // Request and Response are interfaces
import bodyParser from 'body-parser';
import cookieSession from "cookie-session";

import { router } from './routes/loginRoutes';

const app = express(); //const app: Express

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieSession({ name: 'session', keys: ['anyString'] })); // the string in keys to encode the session.
app.use(router);

app.listen(3000, () => {
  console.log('Listening on PORT 3000..');
});