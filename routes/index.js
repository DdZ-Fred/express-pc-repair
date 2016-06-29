import express from 'express';
import fs from 'fs';

const router = express.Router();

router.get('/', (req, res) => {
  res.render('index', {
    title: 'Home',
  });
});

router.get('/about', (req, res) => {
  res.render('about', {
    title: 'About',
  });
});

router.get('/contact', (req, res) => {
  res.render('contact', {
    title: 'Contact',
  });
});

export default router;
