import { ITask } from "./types/tasks";

const baseUrl = "http://localhost:3003/"

export const getAllTodos = async (): Promise<ITask[]> => {
    const res = await fetch (`${baseUrl}tasks`, { cache: 'no-store' })
    const todos = await res.json()
    return todos
}
//añadir
export const addTodo = async (todo: ITask): Promise<ITask> => {
    const res = await fetch(`${baseUrl}tasks`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(todo)
    })
    const newTodo = await res.json();
    return newTodo
}
//editar
export const editTodo = async (todo: ITask): Promise<ITask> => {
    const res = await fetch(`${baseUrl}tasks/${todo.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(todo)
    })
    const updatedTodo = await res.json();
    return updatedTodo
}
//borrar
export const deletedTodo = async (id: string): Promise<void> => {
    const res = await fetch(`${baseUrl}tasks/${id}`, {
        method: 'DELETE',
    })
}