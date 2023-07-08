//app.ts

import { oak } from "./deps.ts";
import router from "./router.ts";

const app = new oak.Application();




app.use(router.routes());
app.use(router.allowedMethods());

app.addEventListener('listen', ({ hostname, port, secure }) => {
    console.log(`Listening on ${ secure ? 'https://' : 'http://' }${hostname}:${port} ...`);
});
await app.listen({ port: 8000 });