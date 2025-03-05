"use server"

import { parseWithZod } from "@conform-to/zod"
import { redirect } from "next/navigation"
import { registerSchema } from "./lib/zodSchema"

export async function SubmitForm(prevState: unknown, formData:FormData) {

    const submission = parseWithZod(formData, {
        schema:registerSchema,
    });

    if(submission.status !== "success"){
        return submission.reply()
    }
    
    return redirect("/")
}