import { Router } from 'express';
import api from './api';

const router = Router();

router.use('/api', api);

/* GET home page. */
router.get('/', (req, res) => {
  res.render('home', { title: 'Address Book' });
});

export default router;
