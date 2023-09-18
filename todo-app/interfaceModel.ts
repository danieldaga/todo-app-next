import { z } from "zod";
import { collection, addDoc, deleteDoc, doc, updateDoc } from "firebase/firestore";
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

export const fusuma: User = {
    contactMail: "adrian@fusuma.io",
    contactName: "adrian",
    contactNumber: 666666666,
    contactNumberWA: 666656666,
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
export const newDocument = () => {
    const collectionRef = collection(db, "Company")
return addDoc(collectionRef, fusuma)
        .then((docRef) => {
            console.log("Documento agregado con ID: ", docRef.id)
        })
        .catch((error) => {
            console.error("Error al agregar el documento: ", error)
        });
}
// newDocument() 

//borrar documento de una coleccion
export const deleteDocument = () => {
    const documentRef = doc(db, "Company", "Tq0cweGPtrkcQSQnMZOW")
    return deleteDoc(documentRef)
    .then(() => {
        console.log("Documento eliminado")
    })
    .catch((error) => {
        console.error("Error al eliminar el documento: ", error)
    });

}

//actualizar documento

export const updateDocument = () => {
    const documentRef = doc(db, "Company", "OZutxHehHq4IFLpsezhg")
    return updateDoc(documentRef, {
        contactNumber: 655575555,
        Name: "fusuma io",
      })
        .then(() => {
          console.log("Document updated successfully");
        })
        .catch((error) => {
          console.error("Error updating document: ", error);
        });
      
}





