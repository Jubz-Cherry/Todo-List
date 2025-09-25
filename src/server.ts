import express from 'express';
import { connectDB } from './config/db';
import routes from './routes/todoRoutes';

const app = express();
app.use(express.json());
app.use(routes);

connectDB(); 

app.listen(3000, () => {
    console.log("Ta rodando");
})
