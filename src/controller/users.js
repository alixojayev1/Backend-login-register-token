import { readFile } from "../lib/fs.js";
import fs from "fs";
import path from "path";
import jwt from "jsonwebtoken";

export const userRegister = (req, res) => {
  try {
    const { name, email, password } = req.body;

    console.log(name);
    const read = readFile("users.json");
    read.push({ id: read.at(-1)?.id + 1 || 1, name, email, password });
    fs.writeFileSync(
      path.join(process.cwd(), "src", "model", "users.json"),
      JSON.stringify(read, null, 4)
    );
    const token = jwt.sign({ email, password }, "qwerty");
    return res.send({
      status: 200,
      token,
    });
  } catch (error) {
    console.log(error);
  }
};

export const userLogin = (req, res) => {
  try {
    const { email, password } = req.body;
    const read = readFile("users.json");
    const newUser = read.find(
      (e) => e.email == email && e.password == password
    );
    if (!newUser) {
      return res.send({
        status: 404,
        message: "Not found user",
      });
    }
    const token = jwt.sign(
      { email: newUser.email, password: newUser.password },
      "qwerty"
    );
    return res.send({
      status: 200,
      token,
    });
  } catch (error) {
    console.log(error);
  }
};


export const userGet =(req,res)=>{
    try {
       const {token}= req.headers; 
       const {email, password}= jwt.verify(token, "qwerty")
       const read = readFile("users.json")
       const newUser = read.find((e)=> e.email == email && e.password==password);
       return res.send(newUser)
    } catch (error) {
        console.log(error);
    }
}
