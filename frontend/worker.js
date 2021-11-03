
self.onmessage = (e) => {
    
    if (e.data == "start") {
        console.log("fontend builder start")
        //Deno.chdir("./frontend")
        console.log("frontend : ",Deno.cwd())

        const _p = Deno.run({ 
            cmd: ["packup","build","frontend/index.html","--dist-dir","./server/dist"]
        });

        self.postMessage("frontend-build-done")
       // self.close();


    } else {
        self.close();
    }





};



