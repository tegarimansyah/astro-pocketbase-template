import { pb } from "./pocketbase"
import { z } from "zod"
import { isLoggedInStore } from '@/stores/account';

export async function userLogin(email: string, password: string) {
    try {
        const authData = await pb.collection('users').authWithPassword(
            email,
            password,
        );
        pb.authStore.save(authData.token)
        isLoggedInStore.set(true)
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
    }
)
export type RegisterFormType = z.infer<typeof registerFormSchema>
