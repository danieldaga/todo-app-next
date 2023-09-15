import { z } from "zod";
import { collection, addDoc } from "firebase/firestore";
import { db, firebaseConfig } from "./firebase/firebase";
import firebase from "firebase/compat/app";
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

const fusuma: User = {
    contactMail: "adrian@fusuma.io",
    contactName: "adrian",
    contactNumber: 666666666,
    contactNumberWA: 666666666,
    logotype: "http://icon/fusuma",
    mail: true,
    Name: "Fusuma",
    phone: true,
    slack: true,
    slackId: 2,
    web: "fusuma.io",
    whatsapp: true
}

//Funcion para agregar nueva colección a compañia
const newDocument = () => {
    const collectionRef = collection(db, "Company");
return addDoc(collectionRef, fusuma)
        .then((docRef) => {
            console.log("Documento agregado con ID: ", docRef.id);
        })
        .catch((error) => {
            console.error("Error al agregar el documento: ", error);
        });
}
// newDocument() 

//borrar documento de una coleccion
const deleteDocument = () => {
    const docRef = firebase.firestore().collection("Company").doc("KC5VzqNAM0GVQ93JxVYL");
return docRef.delete().then(() => {
        console.log("Documento eliminado");
        }).catch((error) => {
        console.error("Error al eliminar el documento: ", error);
        });
}







