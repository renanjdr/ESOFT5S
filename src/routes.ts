import router from "express";
import userController from "./user/user.controller";

const routes = router()

routes.post('/users',userController.create)


export default routes