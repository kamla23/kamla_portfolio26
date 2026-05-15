
import express from 'express';
import Message from '../models/Message.js';

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const newMessage = new Message(req.body);
    await newMessage.save();
    res.status(201).json({ success: true, message: "Saved to DB" });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

export default router;