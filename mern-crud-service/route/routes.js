import express from 'express';
import { addUser, getUser,getUserById } from '../controller/user-controller.js';


const router= express.Router();
router.get('/', getUser);
router.post('/add',addUser);
router.get('/:id', getUserById);

export default router;
