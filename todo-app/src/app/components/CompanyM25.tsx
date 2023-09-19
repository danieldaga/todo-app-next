'use client'

import { useState } from "react"
import { FiEdit, FiPlusSquare, FiTrash2 } from "react-icons/fi"
import { CompanyDTO } from "../../../interfaceModel"
import { collection, addDoc, deleteDoc, doc, updateDoc, firestore, getDocs, query } from "firebase/firestore";
import { db } from "../../../firebase/firebase";
import firebase from "firebase/compat/app";


const CompanyM25 = () =>{
    const [companyName, setCompanyName] = useState<string>("")
    const [companyMail, setCompanyMail] = useState<string>("")
    const [name, setName] = useState<string>("")
    const [companyPhone, setCompanyPhone] = useState<number>(0)
    const [companyPhoneWA, setCompanyPhoneWA] = useState<number>(0)
    const [companyLogotype, setCompanyLogotype] = useState<string>("")
    const [companyWeb, setCompanyWeb] = useState<string>("")

     const Company: CompanyDTO = {
        contactMail: `${companyMail}`,
        contactName: `${companyName}`,
        contactNumber: companyPhone,
        contactNumberWA: companyPhoneWA,
        logotype: `${companyLogotype}`,
        mail: true,
        Name: `${name}`,
        phone: true,
        slack: true,
        slackId: 2,
        web: `${companyWeb}`,
        whatsapp: true,
        createdAt: new Date(),
    }
    //añadir documento
    const handleNewDocument = () => {
        const collectionRef = collection(db, "Company")
        return addDoc(collectionRef, Company)
        .then((docRef) => {
                
                console.log("Documento agregado con ID: ", docRef.id)
            })
            .catch((error) => {
                console.error("Error al agregar el documento: ", error)
            });
    }

    //Actualizar documento
    const handleUpdateDocument = () => {
        const documentRef = doc(db, "Company", "52UI8XsnB73TbGavNU6b")
        return updateDoc(documentRef, Company)
        .then(() => {
            console.log("Document updated successfully");
        })
        .catch((error) => {
            console.error("Error updating document: ", error);
        });
    }
    
    //Borrar documento
    // const handleDeleteDocument = () => {
    //     const documentRef = doc(db, "Company", "QC6yfMVzv5TrczyjeTcA")
    //     return deleteDoc(documentRef)
    //     .then(() => {
    //         console.log("Documento eliminado")
    //     })
    //     .catch((error) => {
    //         console.error("Error al eliminar el documento: ", error)
    //     });
    // }
     const  handleDeleteDocument  = async () => {
        const collectionRef = collection(db, "Company")
        const docsQuery = query(collectionRef);
        const querySnapshot = await getDocs(docsQuery);

        if (!querySnapshot.empty) {
            querySnapshot.forEach((doc) => {
                
            deleteDoc(doc.ref);
            });

            console.log("Documento eliminado exitosamente");
        } else {
            console.log("No se encontraron documentos para eliminar");
        }
    }
    return(
        <form className=" mx-auto">
            <label htmlFor="">Company Name:</label>
            <input
             value={companyName}
             onChange={(e) => setCompanyName (e.target.value)}
             type="text" 
             placeholder="Type here" 
             className="input input-bordered w-full"/><br />
            <label htmlFor="">Mail:</label>
            <input
             value={companyMail}
             onChange={(e) => setCompanyMail (e.target.value)}
             type="text" 
             placeholder="Type here" 
             className="input input-bordered w-full"/><br />
            <label htmlFor="">Name:</label>
            <input
             value={name}
             onChange={(e) => setName (e.target.value)}
             type="text" 
             placeholder="Type here" 
             className="input input-bordered w-full"/><br />
            <label htmlFor="">Phone Number:</label>
            <input
             value={companyPhone}
             onChange={(e) => setCompanyPhone (parseInt(e.target.value))}
             type="text" 
             placeholder="Type here" 
             className="input input-bordered w-full"/><br />
            <label htmlFor="">Whatsapp Number:</label>
            <input
             value={companyPhoneWA}
             onChange={(e) => setCompanyPhoneWA (parseInt(e.target.value))}
             type="text" 
             placeholder="Type here" 
             className="input input-bordered w-full"/><br />
            <label htmlFor="">Logotype:</label>
            <input
             value={companyLogotype}
             onChange={(e) => setCompanyLogotype (e.target.value)}
             type="text" 
             placeholder="Type here" 
             className="input input-bordered w-full"/><br />
            <label htmlFor="">Web:</label>
            <input
             value={companyWeb}
             onChange={(e) => setCompanyWeb (e.target.value)}
             type="text" 
             placeholder="Type here" 
             className="input input-bordered w-full"/><br />
            <div className="flex gap-4 mt-4">
                <FiPlusSquare onClick={() => handleNewDocument()} cursor='pointer' className="text-green-400" size={25}/>
                <FiEdit onClick={() => handleUpdateDocument()} cursor='pointer' className="text-blue-400" size={25} />
                <FiTrash2 onClick={() => handleDeleteDocument()} cursor='pointer' className="text-red-400" size={25} />
            </div>

        
        </form>
    )
}

export default CompanyM25