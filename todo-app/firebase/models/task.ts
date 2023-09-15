import { collection, addDoc, deleteDoc, doc, updateDoc } from "firebase/firestore";
import { db, firebaseConfig } from "../firebase";
import { v4 as uuidv4 } from 'uuid';
import { ITask } from "../../types/tasks";

//añadir tarea a firebase

export const newTask = (todo: ITask) => {
    const collectionRef = collection(db, "todoAPP")
return addDoc(collectionRef, todo)
        .then((docRef) => {
            console.log("Documento agregado con ID: ", docRef.id)

        })
        .catch((error) => {
            console.error("Error al agregar el documento: ", error)
        });
}

//borrar tarea de firebase comprobar

export const deleteTask = (id: string): Promise<void> => {
    const documentRef = doc(db, "todoAPP", `${id}`)
    return deleteDoc(documentRef)
    .then(() => {
        console.log("Documento eliminado")
    })
    .catch((error) => {
        console.error("Error al eliminar el documento: ", error)
    });

}

//editar tarea comprobar

export const updateTask = (todo: ITask) => {
    const documentRef = doc(db, "todoAPP", `${todo.id}`)
    return updateDoc(documentRef, {
        id: `${todo.id}`,
        text: `${todo.text}`
      })
        .then(() => {
          console.log("Document updated successfully");
        })
        .catch((error) => {
          console.error("Error updating document: ", error);
        });
      
}