import express from 'express';
import { addUser, getUser,getUserById,editUser,deleteUser } from '../controller/user-controller.js';


const router= express.Router();
router.get('/', getUser);
router.post('/add',addUser);
router.get('/:id', getUserById);
router.put('/:id',editUser);
router.delete('/:id',deleteUser);

export default router;
