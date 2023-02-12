import PocketBase from "pocketbase";
const url = import.meta.env.PUBLIC_POCKETBASE_URL || "https://pocketbase-darklord.fly.dev";

export function getPocketBase() {
    return new PocketBase(url);
}