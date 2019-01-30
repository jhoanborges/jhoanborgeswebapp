import { Router } from 'express';
import createError from 'http-errors';
import { PhoneDirectory } from '../db';

const router = Router();

router.get('/phoneDirectory', async (req, res) => {
  const table = await PhoneDirectory.findAll();

  res.json(table.toJSON());
});

router.put('/contact', async (req, res) => {
  const { name, email, phone } = req.body;

  if (typeof name !== 'string' || typeof email === 'string' || typeof phone !== 'string') {
    res.status(400).send(createError(400));
  }

  const newContact = await PhoneDirectory.create({
    email,
    name,
    phone,
  });

  res.json(newContact.toJSON());
});

router.post('/contact', async (req, res) => {
  const { id, name, email, phone } = req.body;

  if (typeof id !== 'number') {
    res.status(400).send(createError(400));
  }

  const findedContact = await PhoneDirectory.finda;

  const updatedContact = await PhoneDirectory.update({
    email: email || ,
    name,
    phone,
  });
});

export default router;
