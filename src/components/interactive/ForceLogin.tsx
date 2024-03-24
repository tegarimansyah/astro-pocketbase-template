import { useEffect } from "react"
import { isLoggedIn } from "@/services/backend/userService"

export default function ForceLogin({ isPagePublic = false }) {
    useEffect(() => {
        if (!isLoggedIn() && !isPagePublic) {
            window.location.href = "/login"
        }
    }, [])

    return (
        <></>
    )
}