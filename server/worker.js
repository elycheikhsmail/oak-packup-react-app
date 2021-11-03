
import { open } from "https://deno.land/x/opener/mod.ts";

  
self.onmessage = async (e) => {
    if (e.data == "start") {
        console.log("worker start")
        //Deno.chdir("./server")
        console.log("backend : ",Deno.cwd())
    
        const _p = Deno.run({
            cmd: [Deno.execPath(), "run", "--allow-all", "--unstable", "server/app.ts"]
        });

       await open("http://localhost:3200");


        self.postMessage("backen-server-start")
        
    } else {
        self.close();
    }





};