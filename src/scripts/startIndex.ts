import * as dotenv from "dotenv";
import PocketBase from "pocketbase";
import { MeiliSearch } from "meilisearch";

dotenv.config();


const main = async function () {
    const client = new MeiliSearch({
        host: process.env.MEILISEARCH_HOST ?? "",
        apiKey: process.env.MEILISEARCH_API_KEY ?? ""
    });
    const pb = new PocketBase(process.env.PUBLIC_POCKETBASE_URL );

    
    // Collection learn
    console.log(`Fetching 'learn' from Pocketbase`);
    const jsons: Record<string, any>[] = [];
    let documents = await pb.collection('articles').getFullList(200);
    documents.map(item => {
        console.log(item);
        const json = {
            "collectionName": '',
            "id": '',
            "name": '',
            "title": '',
            "description": '',
            "excrept": ''
        };
        json.collectionName = item.collectionName as string;
        json.id = item.id;
        json.name = item.name;
        json.description = item.description;
        json.title = item.title;
        json.excrept = item.excrept;
        jsons.push(json);
    });
    // console.log(jsons);
    // console.log(`Recreating index learn`);
    // await client.deleteIndex('techs');
    // await client.createIndex('learn');
    console.log(`Add documents to Meilisearch`);
    const a = await client.index('all').addDocuments(jsons);
    console.log(a);
    const b = await client.getTask(19);
    console.log(b);

    // technologies
}

main();