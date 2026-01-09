import User from '../models/userModel.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';



// Signup controller
const signupController = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        // validation
        if (!username || !email || !password) {
            return res.status(400).json({
                message: 'All fields are required !'
            })
        }
        // check if user already exists
        const exitingUser = await User.findOne({ email });
        if (exitingUser) {
            return res.status(400).json({
                message: 'User already exists !'
            })
        }
        // hash password 
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        // create user
        const newUser = new User({ username, email, hashedPassword });
        await newUser.save();
        res.status(201).json({
            message: 'User created successfully !'
        })
    } catch (error) {
        console.error('Error in signupController:', error);
        res.status(500).json({
            message: 'Server error !'
        });
    }
}
// Signin controller
const signinController = async (req, res) => {
    try {
        const { email, password } = req.body;
        // validation
        if (!email || !password) {
            res.status(400).json({
                message: 'All fields are required !'
            })
        }
        // check if user exists
        const existingUser = await User.findOne({ email });
        if (!existingUser) {
            res.status(400).json({
                message: 'Invalid credentials !'
            })
        }
        // compare password
        const isMatch = await bcrypt.compare(password, existingUser.hashedPassword);
        if (!isMatch) {
            res.status(400).json({
                message: 'Invalid credentials !'
            })
        }
        // create token
        const token = await jwt.sign(
            { id: existingUser._id, }
            , process.env.JWT_SECRET,
            {
                expiresIn: '1d'
            });
        res.status(200).json({
            message: "Sign in successfully !",
            token,
            user: {
                id: existingUser._id,
                email: existingUser.email,
                username: existingUser.username
            }
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Server error !',
            error
        })
    }
}

export { signupController, signinController };