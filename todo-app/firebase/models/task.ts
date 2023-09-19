import { collection, addDoc, deleteDoc, doc, updateDoc, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { ITask } from "../../types/tasks";

//añadir tarea a firebase

export const newTask = (todo: ITask) => {
    const collectionRef = collection(db, "todoAPP")
    console.log(0);
    
return addDoc(collectionRef, todo)
        .then(async (docRef) => {
            console.log("Documento agregado con ID: ", docRef.id)
        })
        .catch((error) => {
            console.error("Error al agregar el documento: ", error)
        });
}

//borrar tarea de firebase comprobar

export const deleteTask = async  (id: string) => {
    // sacar id de firebase
    const collectionRef = collection(db, "todoAPP");
    const searchDoc = await getDocs(collectionRef);
    searchDoc.forEach((d) => {
        if (id===d.data().id) {
            console.log('encontrado');
            const documentoRef = doc(db, "todoAPP", d.id);
            deleteDoc(documentoRef)
            .then(() => {
                console.log("Documento eliminado correctamente:", d.id);
            })
            .catch((error) => {
                console.error("Error al eliminar el documento:", error);
            });
        }
        console.log(d.data().id);
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