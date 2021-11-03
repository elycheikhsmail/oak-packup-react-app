 import { getSpaBuildPath } from "../config/settings.ts";
import { app } from "./init_app.ts";
import { Context, send } from "https://deno.land/x/oak@v9.0.0/mod.ts"; 
import { routes as demoRoutes } from "../app-demo/routes.ts";
app.use(demoRoutes.prefix("/api/demo").routes());
app.use(demoRoutes.allowedMethods());


app.use(
    async (ctx: Context) => {
        await send(
            ctx,
            ctx.request.url.pathname,
            {
                root: getSpaBuildPath(),
                index: "index.html"
            }
        )
    }
)


export { app }