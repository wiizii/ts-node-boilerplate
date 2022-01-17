import * as express from 'express';
import * as dotenv from 'dotenv';
dotenv.config();

const app = express();

app.listen(3000, () => {
  console.log('start server');
});
