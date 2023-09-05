"use client";

import { FormEventHandler, useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { addTodo } from "../../../api";
import Modal from "./Modal";

const AddTask = () =>{
    const [modalOpen, setModalOpen] = useState<boolean>(false)
    const [newTaskValue, setNewTaskValue] = useState<string>("")

    const handleSubmitNewTodo: FormEventHandler<HTMLFormElement> = 
    async (e) => {
        e.preventDefault()
        await addTodo({
            id:"3",
            text: newTaskValue
        })
        setNewTaskValue("")
        setModalOpen(false)
        
    }
    
    return <>
        <button onClick={() => setModalOpen(true)} className="btn btn-primary w-full">Add new task <AiOutlinePlus className="ml-2" size={18} /></button>
        <Modal modalOpen={modalOpen} setModalOpen={setModalOpen}>
            <form onSubmit={handleSubmitNewTodo}>
                <h3 className="font-bold text-lg">Add new task</h3>
                <div className="modal-action">
                    <input
                        // value={newTaskValue}
                        // onChange={(e) = setNewTaskValue (e.target.value)}
                        type="text" 
                        placeholder="Type here" 
                        className="input input-bordered w-full w-full" 
                    />
                    <button type="submit" className="btn">Submit</button>
                </div>
            </form>
        </Modal>
    </>
};

export default AddTask