import { Router } from "express";
import multer from "multer";

import SessionController from "./controllers/SessionController";
import UserController from "./controllers/UsersController";

import uploadConfig from "./config/upload";
import OrphanagesController from "./controllers/OrphanagesController";

<<<<<<< HEAD
import authMiddleware from "./middlewares/auth";
=======
//import authMiddleware from "./middlewares/auth";
>>>>>>> 2fc391710cfa4fbb4a1952cca38c7cf69fa61555

const routes = Router();
const upload = multer(uploadConfig);

routes.post("/sessions", SessionController.store);
routes.post("/users", UserController.create);

<<<<<<< HEAD
routes.use(authMiddleware);
=======
//routes.use(authMiddleware);
>>>>>>> 2fc391710cfa4fbb4a1952cca38c7cf69fa61555
routes.get("/orphanages", OrphanagesController.index);
routes.get("/orphanages/:id", OrphanagesController.show);
routes.post("/orphanages", upload.array("images"), OrphanagesController.create);

routes.get("/users", UserController.index);

export default routes;
