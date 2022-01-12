import express from 'express';
import { addUser, getUser } from '../controller/user-controller.js';


const router= express.Router();
router.get('/', getUser);
router.post('/add',addUser);

export default router;
