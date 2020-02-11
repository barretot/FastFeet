import { Router } from 'express';

const routes = Router();

routes.get('/a', (req, res) => {
  return res.json({ message: 'HelloWorld' });
});

export default routes;
