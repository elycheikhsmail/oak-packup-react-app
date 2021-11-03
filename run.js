const serverWorker = new Worker(new URL("./server/worker.js", import.meta.url).href, {
    type: "module",
    deno: {
      namespace: true,
      permissions: {
        env: true,
        hrtime: false,
        net: true,
        ffi: false,
        read: true,
        run: true,
        write: false,
      },
    },
  });

const frontendWorker = new Worker(new URL("./frontend/worker.js", import.meta.url).href, {
    type: "module",
    deno: {
      namespace: true,
      permissions: {
        env: true,
        hrtime: false,
        net: true,
        ffi: false,
        read: true,
        run: true,
        write: true,
      },
    },
  });

frontendWorker.postMessage("start")
frontendWorker.onmessage = (e) => {
  console.log(e.data)
}

serverWorker.postMessage("start")
serverWorker.onmessage = (e) => {
  console.log(e.data)
}


//   deno run --allow-read --allow-run --allow-net --allow-env --unstable run.js

//   deno run --allow-all  --unstable run.js

 
 