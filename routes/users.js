import express from 'express';
import { deleteUser, getAllUser, getSingleUser, updatedUser } from '../controllers/userController.js';
const router = express.Router();

import { verifyUser } from '../utils/verifyToken.js';


//update user
router.put('/:id', verifyUser, updatedUser);

//Delete user
router.delete('/:id',verifyUser, deleteUser);

//get sigle user
router.get('/:id',verifyUser, getSingleUser);

//get all users
router.get('/', verifyUser, getAllUser);

export default router;