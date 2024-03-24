import { pb } from "./pocketbase"
import { z } from "zod"

export function getUserDetail() {
    return pb.authStore.model
}

export function isLoggedIn() {
    console.log(`Checked in: ${pb.authStore.isValid}`)
    return pb.authStore.isValid
}

export function doLogout() {
    pb.authStore.clear()
    window.location.href = "/login"
}

export async function userLogin(email: string, password: string) {
    try {
        const authData = await pb.collection('users').authWithPassword(
            email,
            password,
        );
        pb.authStore.save(authData.token)
        window.location.href = "/app"
    } catch (error) {
        alert(error)
    }
}

export async function userRegister(email: string, password: string) {
    const data = {
        email: email,
        password: password,
        passwordConfirm: password,
    }
    const resp = await pb.collection("users").create(data)
    // TODO check if response is good, no error
    window.location.href = "/confirmation"
}

export const loginFormSchema = z.object(
    {
        email: z.string().email().min(5),
        password: z.string().min(6).max(50),
    }
)
export type LoginFormType = z.infer<typeof loginFormSchema>


export const registerFormSchema = z.object(
    {
        fullname: z.string(),
        email: z.string().email().min(5),
        password: z.string().min(6).max(50),
        confirm: z.string().min(6).max(50),
    }
).refine(
    (data) => data.password === data.confirm,
    {
        message: "Passwords don't match",
        path: ["confirm"], // path of error
    }
);
export type RegisterFormType = z.infer<typeof registerFormSchema>
