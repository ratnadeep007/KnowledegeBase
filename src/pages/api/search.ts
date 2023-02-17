import type { APIRoute } from "astro";
import { allowedCall } from "../../utils/checkurls";
import { getMeiliSearchClient } from "../../utils/meilisearch";

export async function get() {
    return {
        body: 'hello world!',
    }
}

export const post: APIRoute = async function post({ params, request, url }) {
    if (!allowedCall(url.toString(), import.meta.env.ALLOWED_CALLS)) {
        return new Response("FORBIDDEN", {
            status: 401
        });
    }
    const body = await request.json();
    const searchTerm = body.search;
    const client = getMeiliSearchClient();
    const resp = await client.index('all').search(searchTerm);
    return new Response(JSON.stringify(resp));
}