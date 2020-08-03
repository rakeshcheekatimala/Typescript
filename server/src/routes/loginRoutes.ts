import { Router, Request, Response } from 'express';
interface RequestWithBody extends Request {
  body: { [key: string]: string | undefined };
}
const router = Router();

router.get('/login', (req: Request, res: Response) => {
  return res.send(`
    <form method="post">
      <div>
        <label>Email</label>
        <input name="email" />
      </div>
      <div>
        <label>Password</label>
        <input name="password" type="password" />
      </div>
      <button>Submit</button>
    </form>
  `);
});

router.post('/login', (req: RequestWithBody:, res: Response) => {
  const { email, password } = req.body;
  console.log('inside post', email, password);
  if(email && password && email==='testing@gmail.com' && password==='home12345') {
    // the user is logged in 
    req.session={loggedIn:true}
    res.redirect('/'); // redirect the user to the main route
  }
  else  {
    res.send('Please enter valid password or email');
  }
});

router.get('/',(req:Request,res:Response)=>{
  if(req.session && req.session.loggedIn) {
    res.send(`
      <div>
        You are logged In!
        <a href="/logout">Logout</a>
      </div>
    `)
  }
  else {
    res.send(`
      <div>
        You are not logged In!
        <a href="/login">Login</a>
      </div>
    `)
  }
});

router.get('/logout',(req:Request,res:Response)=>{
  req.session = null;
  res.redirect('/');
});

export default router;
