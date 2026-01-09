import express from 'express';
import { signinController, signupController } from '../controllers/userController.js';

const router = express.Router();

// Signup route
router.post('/signup', signupController);
// Signin route
router.post('/signin', signinController);

export default router;