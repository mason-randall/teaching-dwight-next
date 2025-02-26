'use server'

import {createClient} from "./supabase/server";

export async function LoginUser(formData: FormData) {

    const supabase = await createClient()

    const email = formData.get('email')
    const password = formData.get('password')

        const data = {
            email: email as string,
            password: password as string,
    }

    const res = await supabase.auth.signInWithPassword(data)

    console.log(res)
}