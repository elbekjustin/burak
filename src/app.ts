import express from 'express';
import path from 'path';
import routerAdmin from "./router-admin"
import router from "./router"
import morgan from "morgan";
import { MORGAN_FORMAT } from './libs/type/config';

/**  1-ENTRANCE  **/
const app = express();
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(morgan(MORGAN_FORMAT));

/**  2-SESSIONS  **/

/**  3-VIEWS  */
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

/**  4-ROUTERS  **/
app.use("/", router);       // REACT
app.use("/admin", routerAdmin);  // EJS

export default app;