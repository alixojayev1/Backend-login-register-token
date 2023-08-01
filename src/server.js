import express from "express";
import "dotenv/config";
import { router } from "./router/user.routes.js";


function myUser() {
  try {
    const expres = express();
    expres.use(express.json());
    expres.use(router)
    expres.listen(process.env["PORT"], console.log("create server 5050"));
  } catch (error) {
    console.log(error);
  }
}

myUser();
