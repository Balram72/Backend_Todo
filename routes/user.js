import express from "express";

import {getMyProfile,login,register,logout,forgotpassword} from '../controller/user.js';

import {isAuthenticated} from '../middlewares/auth.js'


const router = express.Router();


router.post('/new', register);

router.post('/login', login);

router.get('/logout', logout);

router.put('/forgotpassword',forgotpassword);

router.get('/me',isAuthenticated, getMyProfile)

export default router;