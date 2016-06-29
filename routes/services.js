import express from 'express';
import fs from 'fs';

const router = express.Router();
let services;

fs.readFile('json/services.json', 'utf8', (err, data) => {
  if (err) {
    throw err;
  }
  services = JSON.parse(data);
});

router.get('/', (req, res) => {
  res.render('services', {
    title: 'Services',
    services,
  });
});

export default router;
