import { ITask } from "../../../types/tasks"
import { FiEdit, FiTrash2 } from "react-icons/fi"

interface TaskProps {
    task: ITask
}

const Task: React.FC<TaskProps> = ({task}) =>{
return(
    <tr key={task.id}>
        <td>{task.text}</td>
        <td className="flex gap-5">
            <FiEdit size={25} />
            <FiTrash2 size={25} />
        </td>
    </tr>
)

}

export default Task