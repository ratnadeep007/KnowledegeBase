import MeiliSearch from "meilisearch";

export function getMeiliSearchClient() {
    return new MeiliSearch({
        host: import.meta.env.MEILISEARCH_HOST,
        apiKey: import.meta.env.MEILISEARCH_API_KEY
    });
}