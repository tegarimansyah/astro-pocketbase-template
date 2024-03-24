import type { TypedPocketBase } from "./pbTypes"
import PocketBase from 'pocketbase'

const pocketbaseURL = import.meta.env.PUBLIC_PB_URL || "http://127.0.0.1:8090"
export const pb = new PocketBase(pocketbaseURL) as TypedPocketBase