import express from 'express';
import {  addUser, deleteUser, getUserById, renderUsers } from '../controllers/userController.js';

const router = express.Router();

router.get('/all',renderUsers);
router.get('/:id',getUserById);

router.post('/add-user',addUser);
router.get('/delete-user/:id',deleteUser)

export default router;