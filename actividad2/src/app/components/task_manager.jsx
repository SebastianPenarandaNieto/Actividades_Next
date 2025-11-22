"use client";

import { useState } from "react";

export default function Home() {
  const [tasks, setTasks] = useState(["Tarea 1", "Tarea 2"]);
  const [currentTask, setCurrentTask] = useState("");

  const addButtonHandler = () => {
    setTasks([...tasks, currentTask]);
    setCurrentTask("");
  };

  // Reto 1: Hacer que no se pueda agregar una tarea vacía 
  // Reto 2: Hacer que no se pueda agregar una tarea repetida
  // Reto 3: Hacer que al dar click en una tarea, aparezca tachada (clase tailwind "line-through")
  // Reto 4: Hacer que al dar click en una tarea tachada, desaparezca la tarea
  // Reto 5: Poner un botón que organice las tareas alfabéticamente
  // Reto 6: Poner un botón que elimine todas las tareas
  // Reto 7: Hacer que las tareas se ordenen en orden inverso al volver a presionar el botón de organizar

  return (
    <section className="bg-red-100 p-4 max-w-2xl mx-auto my-10">
      <div className="my-2 flex gap-2">
        <input
          className="bg-gray-100 border border-red-400 rounded-lg p-2"
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
          Agregar
        </button>
        {/* <button className="bg-red-500 text-white rounded-lg px-4 py-2">
          Ordenar
        </button> */}
      </div>
      <div className="flex flex-col gap-2">
        {tasks.map((task, index) => (
          <div key={index} className="bg-red-200 rounded-lg px-2 py-1">
            {task}
          </div>
        ))}
      </div>
    </section>
  );
}