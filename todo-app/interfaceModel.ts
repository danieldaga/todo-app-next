import { z } from "zod";
import { collection, addDoc } from "firebase/firestore";
import { db } from "./firebase/firebase";
export interface User {
    contactMail: string,
    contactName: string,
    contactNumber: number,
    contactNumberWA: number,
    logotype: HTMLImageElement | string,
    mail: boolean,
    Name: string,
    phone: boolean,
    slack: boolean,
    slackId: number,
    web: string,
    whatsapp: boolean
}
//nullable() and .optional() funciones de zod


export const UserSchema = z.object({
    contactMail: z.string(),
    contactName: z.string(),
    contactNumber: z.number(),
    contactNumberWA: z.number(),
    logotype: z.string(),
    mail: z.boolean(),
    Name: z.string(),
    phone: z.boolean(),
    slack: z.boolean(),
    slackId: z.number(),
    web: z.string(),
    whatsapp: z.boolean()
})

