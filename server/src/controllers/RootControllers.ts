import { Request, Response, NextFunction } from 'express';
import { controller, get, use } from './decorators';

const requireAuth = (req: Request, res: Response, next: NextFunction): void => {
  if (req.session && req.session.loggedIn) {
    next();
    return;
  }
  res.status(403);
  res.send('Not permitted');
}

@controller('')
class RootController {
  @get('/')
  getRoot(req: Request, res: Response) {
    if (req.session && req.session.loggedIn) {
      res.send(`
        <div>
          <h1>You are Loged In..</h1>
          <a href="/auth/logout">Logout</a>
        </div>
      `);
    } else {
      res.send(`
        <div>
          <h1>You are Not Loged In..</h1>
          <a href="/auth/login">Login</a>
        </div>
      `);
    }
  };

  @get('/protected')
  @use(requireAuth)
  getProtected(req: Request, res: Response) {
    res.send('<h1>Wellcom To Protected rout, Login User!</h1>')
  };
}