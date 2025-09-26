import express from 'express';
import { connectDB } from './config/db';
import routes from './routes/todoRoutes';
import cors from 'cors'; 
import axios from 'axios';  


const app = express();
app.use(express.json());
app.use(routes);
app.use(cors());
app.use(axios);


connectDB(); 

app.listen(3000, () => {
    console.log("Ta rodando");
})
