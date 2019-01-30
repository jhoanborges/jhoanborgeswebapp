import { Router } from 'express';
import createError from 'http-errors';
import { PhoneDirectory } from '../db';

const router = Router();

router.get('/contacts', async (req, res) => {
  const table = await PhoneDirectory.findAll();

  res.json(table);
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
  }, { returning: true });

  res.json(newContact.toJSON());
});

router.post('/contact/:contactId', async (req, res) => {
  const { contactId } = req.params;
  const { name, email, phone } = req.body;

  if (Number.isNaN(Number(contactId))) {
    res.status(400).send(createError(400));
  } else {
    let contact = await PhoneDirectory.findOne({ where: { id: Number(contactId) } });

    if (!contact) {
      res.status(404).send(createError(404));
    }

    await PhoneDirectory.update({
      name: name || contact.name,
      email: email || contact.email,
      phone: phone || contact.phone,
    }, { where: { id: Number(contactId) } });

    contact = await PhoneDirectory.findOne({ where: { id: Number(contactId) } });

    res.send(contact.toJSON());
  }
});

router.delete('/contact/:contactId', async (req, res) => {
  const { contactId } = req.params;

  if (typeof contactId !== 'number') {
    res.status(400).send(createError(400));
  } else {
    await PhoneDirectory.destroy({ where: { id: Number(contactId) } });

    res.send(true);
  }
});

export default router;
