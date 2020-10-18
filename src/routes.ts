import { Router } from 'express';
import multer from 'multer';

import UserController from '../src/controllers/UsersController';
import SessionController from '../src/controllers/SessionController';

import uploadConfig from './config/upload';
import OrphanagesController from './controllers/OrphanagesController';

import authMiddleware from '../src/middlewares/auth';

const routes = Router();
const upload = multer(uploadConfig);

routes.post('/users', UserController.create);
routes.get('/users', UserController.index);

routes.post('/sessions', SessionController.store);

 routes.get('/orphanages', OrphanagesController.index);
 routes.get('/orphanages/:id', OrphanagesController.show);
 routes.post('/orphanages', upload.array('images'), OrphanagesController.create);
 
// routes.use(authMiddleware); 

export default routes;