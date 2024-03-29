import { pb } from "@/services/backend/pocketbase"
import { isLoggedInStore } from "@/stores/account"

export function getUserDetail() {
    return pb.authStore.model
}

export function isLoggedIn() {
    console.log(`Checked in: ${pb.authStore.isValid}`)
    return pb.authStore.isValid
}

export function doLogout() {
    pb.authStore.clear()
    isLoggedInStore.set(false)
    window.location.href = "/login"
}