import { Router, Request, Response, NextFunction } from "express";
import { checkJWT } from "./auth";
import controller from "./controller";

const routes = Router();

routes.use(function timeLog(req, res, next) {
  console.log("Time: ", Date.now());
  next();
});

routes.post("/register", controller.register);
routes.post("/login", controller.login);
routes.get("/user", checkJWT, controller.user);
routes.post("/create-task", checkJWT, controller.createTask);
routes.get("/list-tasks", checkJWT, controller.listTasks);

export default routes;
