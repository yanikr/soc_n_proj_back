import express from 'express';
import {
  getUser,
  getUserFriends,
  addRemoveFriend,
} from '../controllers/users.js';
import { verifyToken } from './../middlewares/auth.js';

const router = express.Router();

router.get('/:id', verifyToken, getUser);
router.get('/:id/firends', verifyToken, getUserFriends);
router.patch('/:id/:friendId', verifyToken, addRemoveFriend);

export default router;
