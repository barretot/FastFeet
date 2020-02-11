import { Router } from 'express';
import UserController from './database/app/controllers/UserController';

const routes = Router();

routes.post('/users', UserController.store);

export default routes;
