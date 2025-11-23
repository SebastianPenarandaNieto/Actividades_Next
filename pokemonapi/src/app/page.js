"use client";

import { useEffect, useState } from "react";
import Character from "@/components/Character";

const API_BASE_URL = "https://thesimpsonsapi.com/api/characters";

export default function SimpsonsPage() {
  const [nombre, setNombre] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(API_BASE_URL)
      .then((response) => response.json())
      .then((responseJson) => {
        setData(responseJson.results);
      })
      .catch((error) => console.error(error));
  }, []);

  const personajes_filtrados = data.filter((personaje) => 
    personaje.name.toLowerCase().includes(nombre.toLowerCase())
  );
  


  return (
    <div className="flex flex-col gap-4 bg-cyan-600 min-h-screen">

      {/* Cuadro para solicitar el nombre del personaje: */}
      <div className="my-2 flex gap-2 justify-center">
        <input
          className="bg-cyan-300 border-cyan-900 rounded-lg p-2 text-blue-900 border text-xl "
          type="text"
          value={nombre}
          onChange={(e) => {
            setNombre(e.target.value);
          }}
        />
      </div>  

      {/* Cuadro para mostrar cada personaje: */}
      <div className="flex flex-wrap justify-center gap-4 p-4">
        {
          personajes_filtrados.map((personaje) => (
            <Character key = {personaje.id} data = {personaje}></Character>
          ))
        }
      </div>

    </div>
  );
}