"use client";

import { ITask } from "../../../types/tasks"
import { FiEdit, FiTrash2 } from "react-icons/fi"
import { FormEventHandler, useState } from "react"
import Modal from "./Modal"
import { useRouter } from "next/navigation";
import { deletedTodo, editTodo } from "../../../api";
import { deleteTask, updateTask } from "../../../firebase/models/task";

interface TaskProps {
    task: ITask
}

const Task: React.FC<TaskProps> = ({task}) =>{
    const router = useRouter()
const [openModalEdit, setOpenModalEdit] = useState<boolean>(false)
const [openModalDeleted, setOpenModalDeleted] = useState<boolean>(false)
const [taskToEdit, setTaskToEdit] = useState<string>(task.text)

const handleSubmitEditTodo: FormEventHandler<HTMLFormElement> = 
async (e) => {
    e.preventDefault()
    await editTodo({
        id: task.id,
        text: taskToEdit
    })
    // setTaskToEdit("")
    setOpenModalEdit(false)
    router.refresh();
    
}
const handleDeleteTask = async (id: string) => {
    await deletedTodo(id)
    await deleteTask(id)
    setOpenModalDeleted(false)
    router.refresh();
}

return(
    <tr key={task.id}>
        <td className="w-full">{task.text}</td>
        <td className="flex gap-5">
            <FiEdit onClick={() => setOpenModalEdit(true)} cursor='pointer' className="text-blue-400" size={25} />
                <Modal modalOpen={openModalEdit} setModalOpen={setOpenModalEdit}>
                    <form onSubmit={handleSubmitEditTodo}>
                        <h3 className="font-bold text-lg">Edit task</h3>
                        <div className="modal-action">
                            <input
                                value={taskToEdit}
                                onChange={(e) => setTaskToEdit (e.target.value)}
                                type="text" 
                                placeholder="Type here" 
                                className="input input-bordered w-full" 
                            />
                            <button type="submit" className="btn">Submit</button>
                        </div>
                    </form>
                </Modal>
            <FiTrash2 onClick={() => setOpenModalDeleted(true)} cursor='pointer' className="text-red-400" size={25} />
                <Modal modalOpen={openModalDeleted} setModalOpen={setOpenModalDeleted}>
                    <h3 className="text-lg">Are you sure, you want to delete this task?</h3>
                    <div className="modal-action">
                        <button onClick={() => handleDeleteTask(task.id)}
                        className='btn bg-red-500 text-black'>
                            Yes
                        </button>
                    </div>
                </Modal>
        </td>
    </tr>
)

}

export default Task