import express from "express";
const curdRoute = express.Router();
import { curdApi } from "../controllers/curdController.js";


curdRoute.post('/mobile',curdApi)


export default curdRoute;