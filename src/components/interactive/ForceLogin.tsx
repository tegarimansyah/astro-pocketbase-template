import { useEffect } from "react"
import { isLoggedIn } from "@/services/backend/utils"

export default function ForceLogin({ isPagePublic = false }) {
    useEffect(() => {
        console.log(isLoggedIn())
        if (!isLoggedIn() && !isPagePublic) {
            window.location.href = "/login"
        }
    }, [])
}