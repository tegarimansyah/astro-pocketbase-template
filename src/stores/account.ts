import { atom, map } from 'nanostores';
import { pb } from '@/services/backend/pocketbase'

export const isLoggedInStore = atom(pb.authStore.isValid);
export const userDataStore = map({})