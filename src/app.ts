import express, { Application, Request, Response, NextFunction } from "express";
import * as bodyParser from "body-parser";
import routes from "./routes";
const app: Application = express();
const port = 5000;

app.use(bodyParser.json());
app.use("/", routes);

app.listen(port, () => console.log(`Server is running on ${port}`));
