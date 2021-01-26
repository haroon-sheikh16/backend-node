import { Request, Response, NextFunction } from "express";
import * as jwt from "jsonwebtoken";

let userData: { email: String; password: String; id: Number }[] = [];
let task: { name: String; id: Number }[] = [];

class controller {
  static register = (req: Request, res: Response, next: NextFunction) => {
    if (req.body.email && req.body.password) {
      let email: String = req.body.email;
      let password: String = req.body.password;
      let alreadyExist = false;

      if (userData.length > 0) {
        userData.forEach((user) => {
          if (user.email === email) {
            alreadyExist = true;
          }
        });
      }

      if (alreadyExist) {
        res.status(400).send({
          message: "user already exist with this email.",
        });
      } else {
        let user = { email, password, id: userData.length + 1 };
        userData.push(user);
        return res.send({
          user: { id: user.id, email: user.email },
        });
      }
    } else {
      return res.status(400).send({
        message: "email or password not provided",
      });
    }
  };

  static login = (req: Request, res: Response, next: NextFunction) => {
    if (req.body.email && req.body.password) {
      let email: String = req.body.email;
      let password: String = req.body.password;
      let login = false;
      let userId: Number = 0;
      if (userData.length > 0) {
        userData.forEach((user) => {
          if (user.email === email && user.password === password) {
            login = true;
            userId = user.id;
          }
        });
      }
      if (!login) {
        res.status(400).send({
          message: "email or password invalid.",
        });
      } else {
        let payload = {
          id: userId,
          email: email,
        };
        let token = jwt.sign(payload, "shhh...");

        return res.send({
          message: "user login successfully",
          jwt: token,
        });
      }
    } else {
      return res.status(400).send({
        message: "email or password not provided",
      });
    }
  };

  static user = (req: Request, res: Response, next: NextFunction) => {
    let userExist = false;

    if (userData.length > 0) {
      userData.forEach((user) => {
        if (
          user.email === req.body.payload.email &&
          user.id === req.body.payload.id
        ) {
          userExist = true;
        }
      });
    }

    if (!userExist) {
      res.status(400).send({
        message: "user does not exist.",
      });
    } else {
      return res.send({
        user: { id: req.body.payload.id, email: req.body.payload.email },
      });
    }
  };

  static createTask = (req: Request, res: Response, next: NextFunction) => {
    if (req.body.name) {
      let name: String = req.body.name;

      let taskdata = { name, id: task.length + 1 };
      task.push(taskdata);
      return res.send({
        user: { id: taskdata.id, name: taskdata.name },
      });
    } else {
      return res.status(400).send({
        message: "task name not provided",
      });
    }
  };

  static listTasks = (req: Request, res: Response, next: NextFunction) => {
    return res.status(400).send({
      tasks: task,
    });
  };
}

export default controller;
