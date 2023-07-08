import { oak } from "../deps.ts";


class AuthController {
    login: (ctx: oak.RouterContext) => {
        
    }
    register(ctx: oak.RouterContext) {
        console.log("register");
    }
}

const authController = new AuthController();
export default authController;