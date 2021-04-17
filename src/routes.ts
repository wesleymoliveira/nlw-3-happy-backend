import { Router } from "express";
import multer from "multer";

import SessionController from "./controllers/SessionController";
import UserController from "./controllers/UsersController";

import uploadConfig from "./config/upload";
import OrphanagesController from "./controllers/OrphanagesController";

//import authMiddleware from "./middlewares/auth";

const routes = Router();
const upload = multer(uploadConfig);

routes.post("/sessions", SessionController.store);
routes.post("/users", UserController.create);

//routes.use(authMiddleware);
routes.get("/orphanages", OrphanagesController.index);
routes.get("/orphanages/:id", OrphanagesController.show);
routes.post("/orphanages", upload.array("images"), OrphanagesController.create);

routes.get("/users", UserController.index);

export default routes;
