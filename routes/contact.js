import express from 'express';
import nodemailer from 'nodemailer';
import { createEmail, getTransporter } from '../utils/email';
import env from '../env';

const router = express.Router();

router.get('/', (req, res) => {
  res.render('contact', {
    title: 'Contact',
  });
});

router.post('/send', ({ body }, res) => {
  const { name, email, message } = body;

  const transporter = getTransporter(nodemailer);
  const emailData = createEmail(name, email, message);

  transporter.sendMail(emailData, (err, info) => {
    if (err) {
      throw err;
    }
    console.log(`Message sent: ${info.response}`);
  });
});

export default router;
