import { z } from "zod";
import { collection, addDoc, deleteDoc, doc, updateDoc, Firestore } from "firebase/firestore";
import { db } from "./firebase/firebase";
// interface
// export interface Company {
//     contactMail: string,
//     contactName: string,
//     contactNumber: number,
//     contactNumberWA: number,
//     logotype: HTMLImageElement | string,
//     mail: boolean,
//     Name: string,
//     phone: boolean,
//     slack: boolean,
//     slackId: number,
//     web: string,
//     whatsapp: boolean
// }


export const CompanySchema = z.object({
    contactMail: z.string().email(),
    contactName: z.string(),
    contactNumber: z.number(),
    contactNumberWA: z.number(),
    logotype: z.string(),
    mail: z.boolean(),
    Name: z.string(),
    phone: z.boolean(),
    slack: z.boolean(),
    slackId: z.number(),
    web: z.string().url(),
    whatsapp: z.boolean(),

})
type CompanyDTO = z.infer<typeof CompanySchema>

export const fusuma: CompanyDTO = {
    contactMail: "adrian@fusuma.io",
    contactName: "adrian",
    contactNumber: 555555555,
    contactNumberWA: 66665666,
    logotype: "http://icon/fusuma",
    mail: true,
    Name: "Fusuma",
    phone: true,
    slack: true,
    slackId: 2,
    web: "http://fusuma.io",
    whatsapp: true
}
//validacion zod
// try {
//     const validatedData = CompanySchema.parse(fusuma);
//     console.log("Datos válidos:", validatedData);
//   } catch (error) {
//     console.error("Error de validación:", error);
//   }
//Funcion para agregar nueva colección a compañia
export const newDocument = () => {
    const collectionRef = collection(db, "Company")
    return addDoc(collectionRef, fusuma)
    .then((docRef) => {
            try {
                const validatedData = CompanySchema.parse(fusuma);
                console.log("Datos válidos:", validatedData);
              } catch (error) {
                console.error("Error de validación:", error);
              }
            console.log("Documento agregado con ID: ", docRef.id)
        })
        .catch((error) => {
            console.error("Error al agregar el documento: ", error)
        });
}
//borrar documento de una coleccion
export const deleteDocument = () => {
    const documentRef = doc(db, "Company", "mpvxP1KD4YBCFylvPNon")
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
    const documentRef = doc(db, "Company", "mpvxP1KD4YBCFylvPNon")
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





