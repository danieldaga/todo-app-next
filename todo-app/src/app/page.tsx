import { getAllTodos } from "../../api";
import AddTask from "../app/components/AddTask";
import TodoList from "../app/components/TodoList";
import CompanyM25 from "./components/CompanyM25";


export default async function Home() {
  const tasks = await getAllTodos()
  console.log(tasks);
  
  return (
    <main className="max-w-4xl mx-auto mt-4">
      {/* <div className="text-center my-5 flex flex-col gap-4">
        <h1 className="text-2xl font-bold">To Do List App</h1>
        <AddTask />
      </div> 
      <TodoList tasks={tasks} /> */}
      <CompanyM25 />
    </main>
  )
}
