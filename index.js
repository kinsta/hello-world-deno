import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const argPort = Deno.env.get("PORT") ? Number(Deno.env.get("PORT")) : 8000;

serve(
  async (_req) => {
    const body = (await Deno.open("index.html")).readable;

    return new Response(body, {
      headers: {
        "content-type": 'text/html; charset=UTF-8',
      },
    });
  },
  { port: argPort },
);
