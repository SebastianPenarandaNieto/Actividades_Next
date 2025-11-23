"use client";

import { useEffect, useState } from "react";
import Character from "@/components/Character";

const API_BASE_URL = "https://thesimpsonsapi.com/api/characters";

export default function SimpsonsPage() {
  const [nombre, setNombre] = useState("");
  const [data, setData] = useState([]);
  const [personajeSeleccionado, setPersonajeSeleccionado] = useState(null);
  const [page, setPage] = useState(1);

   useEffect(() => {
    fetch(`${API_BASE_URL}?page=${page}`)
      .then((response) => response.json())
      .then((responseJson) => {
        setData(responseJson.results);
      })
      .catch((error) => console.error(error));
  }, [page]);

  const personajes_filtrados = data.filter((personaje) => 
    personaje.name.toLowerCase().includes(nombre.toLowerCase())
  );
  


  return (
    <div className="flex flex-col gap-4 bg-sky-100 min-h-screen">

      {/* Paginación */}
      <div className="flex justify-center gap-4  mt-8">
        <button
          onClick={() => setPage((prev) => prev - 1)}
          disabled={page === 1}
          className="bg-gray-700 text-white px-4 py-2 rounded disabled:opacity-50 ml-8 mr-60"
        >
          <div className="text-xl font-bold"> ◀ </div>
        </button>

        <div className="text-xl font-bold text-blue-900 p-2">Página {page}</div>

        <button
          onClick={() => setPage((prev) => prev + 1)}
          disabled={page === 60}
          className="bg-gray-700 text-white px-4 py-2 rounded disabled:opacity-50 mr-8 ml-60"
        >
         <div className="text-xl font-bold"> ▶ </div> 
        </button>
      </div>

      {/* Cuadro para solicitar el nombre del personaje: */}
      <div className="mb-8 mt-4 flex gap-2 justify-center">
        <input
          className="bg-blue-200 border-cyan-900 rounded-lg p-2 text-black border text-xl "
          type="text"
          value={nombre}
          onChange={(e) => {
            setNombre(e.target.value);
          }}
        />
      </div>  

      {/* Cuadro para mostrar cada personaje: */}
      <div className="flex flex-wrap justify-center gap-8 p-4">
        {
          personajes_filtrados.map((personaje) => (
            <Character 
              key = {personaje.id} 
              data = {personaje}
              onClick={() => setPersonajeSeleccionado(personaje)}>
            </Character>
          ))
        }
      </div>

      {personajeSeleccionado && (
        <div className="fixed inset-0 bg-black/60 flex justify-center items-center">
          <div className="bg-white p-6 rounded-xl w-96 shadow-xl">
            
            <Character 
              data={personajeSeleccionado} 
              variant="detail"
            />

            <button
              className="mt-4 bg-red-500 font-bold text-white px-4 py-2 rounded-lg w-full"
              onClick={() => setPersonajeSeleccionado(null)}
            >
              Cerrar
            </button>
          </div>
        </div>
      )}

    </div>
  );
}