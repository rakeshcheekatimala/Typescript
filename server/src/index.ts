import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import cookieSession from 'cookie-session';
import loginRoutes from './routes/loginRoutes';
const app = express();
const PORT = process.env.port || 3000;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieSession({ keys: ['yocookiesession'] }));
app.use(loginRoutes);

app.listen(PORT, () => {
  console.log('server running on this port ' + PORT);
});
