import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';
import { signupValidation, loginValidation } from '../middleware/validator.js';

const router = express.Router();

// --- SIGNUP ROUTE ---
router.post('/signup', signupValidation, async (req, res) => {
  const { name, email, password } = req.body;

  try {
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ 
        success: false, 
        message: 'User with this email already exists' 
      });
    }

    user = new User({ name, email, password });

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);

    await user.save();

    const payload = { user: { id: user.id } };

    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: '24h' },
      (err, token) => {
        if (err) throw err;
        res.status(201).json({
          success: true,
          message: 'User registered successfully',
          token,
          user: { id: user.id, name: user.name, email: user.email }
        });
      }
    );
  } catch (err) {
    console.error("Signup Error:", err.message);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

// --- LOGIN ROUTE ---
router.post('/login', loginValidation, async (req, res) => {
  const { email, password } = req.body;

  try {
    let user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ 
        success: false, 
        message: 'Invalid Credentials' 
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ 
        success: false, 
        message: 'Invalid Credentials' 
      });
    }

    const payload = { user: { id: user.id } };

    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: '24h' },
      (err, token) => {
        if (err) throw err;
        res.json({
          success: true,
          message: 'Login Successful',
          token,
          user: { id: user.id, name: user.name, email: user.email }
        });
      }
    );
  } catch (err) {
    console.error("Login Error:", err.message);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

export default router;