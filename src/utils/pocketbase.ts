import PocketBase from "pocketbase";
const url = import.meta.env.PUBLIC_POCKETBASE_URL;

export function getPocketBase() {
    return new PocketBase(url);
}