import express, { Request, Response } from 'express';
import {userRouter} from "./routes/user.routes";

const app = express();
app.use(express.json());
app.use(userRouter)

app.get('/', (request: Request, response: Response) => {
  return response.send('Api funcionando!');
});

app.listen(3000, () => console.log("Server is running on port 3000"));