import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { parse } from 'https://deno.land/std@0.168.0/flags/mod.ts';

const { args } = Deno;
const argPort = parse(args).port ? Number(parse(args).port) : 8000;

serve((_req) => new Response("Hello, world"), { port: argPort });