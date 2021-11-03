
const _p = Deno.run({
    cmd: [Deno.execPath(), "run", "-allow-all", "--unstable", "app.ts"]
    //"deno run --allow-all --unstable app.ts".split(""),
},
)
 
// deno run --allow-run --allow-read cli.ts