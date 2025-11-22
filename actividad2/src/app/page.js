"use client";

import { useState } from "react";

export default function Home() {
  const [tasks, setTasks] = useState([]);
  const [currentTask, setCurrentTask] = useState("");
  const [sorted, setSorted] = useState(false);

  const addButtonHandler = () => {
    if (currentTask.trim() === "") return;
    if (tasks.includes(currentTask)) return; 
    setTasks([...tasks, { text: currentTask, done: false }]);
    setCurrentTask("");
  };

  const marcarTarea = (index) => {
    setTasks((prev) =>
      prev.map((t, i) => (i === index ? { ...t, done: !t.done } : t))
    );
  };

  const eliminarTarea = (index) => {
    setTasks((prev) => prev.filter((t, i) => i !== index));
  };

  const ordenarTarea = () => {
    setTasks((prev) =>[...prev].sort((a, b) => sorted ? b.text.localeCompare(a.text) : a.text.localeCompare(b.text)));
    setSorted((prev) => !prev)
  };


  


  // Reto 1: Hacer que no se pueda agregar una tarea vacía 
  // Reto 2: Hacer que no se pueda agregar una tarea repetida -->
  // Reto 3: Hacer que al dar click en una tarea, aparezca tachada (clase tailwind "line-through") --> HECHA
  // Reto 4: Hacer que al dar click en una tarea tachada, desaparezca la tarea
  // Reto 5: Poner un botón que organice las tareas alfabéticamente
  // Reto 6: Poner un botón que elimine todas las tareas
  // Reto 7: Hacer que las tareas se ordenen en orden inverso al volver a presionar el botón de organizar

  return (
    <section className="bg-blue-100 p-4 min-h-screen">
      <div className="my-2 flex gap-2 ">
        <input
          className="bg-cyan-500 border border-cyan-900 rounded-lg p-2"
          type="text"
          value={currentTask}
          onChange={(e) => {
            setCurrentTask(e.target.value);
          }}
        />
        <button
          className="bg-red-500 text-white rounded-lg px-4 py-2"
          onClick={addButtonHandler}
        >
          ➕
        </button>
        <button className="bg-red-500 text-white rounded-lg px-4 py-2" onClick={() => ordenarTarea()}>
          {sorted ? "🔽" : "🔼"}
        </button> 

        {/* boton para eliminar todas */}
        <button className="bg-red-500 text-white rounded-lg px-4 py-2" onClick={() => setTasks([])}>
          Delete All
        </button> 
      </div>
      <div className="flex flex-col gap-2">
        {tasks.map((task, index) => (
          <div
            key={index}
            className={`bg-cyan-700 rounded-lg px-2 py-1 cursor-pointer ${
              task.done ? "line-through" : ""
            }`}
            onClick={task.done ? () => eliminarTarea(index): () => marcarTarea(index)}
          >
            {task.text}
          </div>
        ))}
      </div>
    </section>
  );
}