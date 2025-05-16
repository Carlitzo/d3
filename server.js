import { serveDir, serveFile } from "jsr:@std/http";

Deno.serve(async (request) => {
    const pathname = new URL(request.url).pathname;

    if (pathname.startsWith("/static")) {
        return serveDir(request, {
            fsRoot: "public",
            urlRoot: "static",
            quiet: true
        });
    }
});