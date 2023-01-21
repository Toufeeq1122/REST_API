import express from "express";
const app = express();
import dotenv from "dotenv"
import curdRoute from "./routes/curdRoute.js";
app.set("views", "./views");
app.set("view engine", "ejs");
// import { curdRoute } from './routes/curdRoute.js';
// import connectDb from './db/connection.js';

dotenv.config();
let port =process.env.PORT ||3000
// const url=process.env.URL
// const db=process.env.DBNAME
// connectDb(url,db);

app.use('/',curdRoute)





app.listen(port, () =>{
    console.log(`server started ${port}`);
});