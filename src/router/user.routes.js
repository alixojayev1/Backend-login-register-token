import { Router } from "express";
import { userGet, userLogin, userRegister } from "../controller/users.js";


export  const router =  Router()
router.post('/register', userRegister);
router.post('/login', userLogin)
router.get('/user', userGet)

