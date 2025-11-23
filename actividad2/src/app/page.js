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
    setSorted(false)
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
  // Reto 2: Hacer que no se pueda agregar una tarea repetida
  // Reto 3: Hacer que al dar click en una tarea, aparezca tachada (clase tailwind "line-through")
  // Reto 4: Hacer que al dar click en una tarea tachada, desaparezca la tarea
  // Reto 5: Poner un botón que organice las tareas alfabéticamente
  // Reto 6: Poner un botón que elimine todas las tareas
  // Reto 7: Hacer que las tareas se ordenen en orden inverso al volver a presionar el botón de organizar

  return (
    <section className="bg-blue-100 p-4 min-h-screen">

      {/* Contedenor de las opciones */}
      <div className="my-2 flex gap-2 justify-center">

        {/* Cuadro para solicitar nombre de tarea */}
        <input
          className="bg-cyan-300 border border-cyan-900 rounded-lg p-2 text-blue-900"
          type="text"
          value={currentTask}
          onChange={(e) => {
            setCurrentTask(e.target.value);
          }}
        />

        {/* Boton para agregar tareas */}
        <button
          className="bg-green-500 text-white rounded-full ml-32 px-4 py-2"
          onClick={addButtonHandler}
        >
          ✚
        </button>

        {/* Boton para ordenar tareas */}
        <button className="bg-amber-500 text-white rounded-full px-4 py-2" onClick={() => ordenarTarea()}>
          {sorted ? "▲" : "▼"}
        </button> 

        {/* Boton para eliminar todas las tareas*/}
        <button className="bg-red-500 text-white rounded-full px-4 py-2" onClick={() => setTasks([])}>
          ✖
        </button> 

      </div>


      {/* Contedenor de las tareas */}
      <div className="flex flex-col gap-2 justify-center my-8">
        {tasks.map((task, index) => (
          <div
            key={index}
            className={`bg-blue-800 rounded-lg px-2 py-1 cursor-pointer ${
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