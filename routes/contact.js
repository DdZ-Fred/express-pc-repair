import express from 'express';
import nodemailer from 'nodemailer';

const router = express.Router();

router.get('/', (req, res) => {
  res.render('contact', {
    title: 'Contact',
  });
});

router.post('/send', ({ body }, res) => {
  const { name, email, message } = body;
  console.log(`Message received from ${name} - ${email}:\n${message}`);
});

export default router;
