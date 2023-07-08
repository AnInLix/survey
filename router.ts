// router.ts

import { oak } from "./deps.ts";
import authController from "./controllers/AuthController.ts";

const router = new oak.Router();

// Configurer our routes
router
    .get("/", (ctx: oak.RouterContext) => {
        ctx.response.body = "Hello my amigos!";
    })
    .post("/login", authController.login)
    .post("/register", authController.register)

export default router;
