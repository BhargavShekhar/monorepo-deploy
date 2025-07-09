import prismaClinet from "@repo/db";

Bun.serve({
    port: 8081,
    fetch(req, serve) {
        if(serve.upgrade(req)) {
            return;
        }
        return new Response("Upgrade failed", { status: 500 })
    },
    websocket: {
        message(ws, message) {
            prismaClinet.user.create({
                data: {
                    username: Math.random().toString(),
                    password: Math.random().toString()
                }
            })

            ws.send("User created!!")
        }
    }
})