import { useEffect, useState } from "react";

export default function Character({ data, onClick, variant = "card" }) {

  const isCard = variant === "card";
  const imageSize = isCard ? "h-36 w-36" : "h-48 w-48";

  const detalles = [
    { label: "Edad", valor: data.age },
    { label: "Nacimiento", valor: data.birthdate },
    { label: "Género", valor: data.gender },
    { label: "Ocupación", valor: data.occupation },
    { label: "Estado", valor: data.status },
  ];

  return (
    <div
      onClick={onClick}
      className={`flex flex-col items-center p-4 rounded-xl shadow 
      ${isCard ? "bg-blue-900 cursor-pointer" : "bg-purple-900"}`}
    >
      <div className="text-xl font-bold mb-2 text-sky-100">
        {data.name}
      </div>

      <img
        className={`${imageSize} rounded-lg`}
        src={"https://cdn.thesimpsonsapi.com/500" + data.portrait_path}
        alt={data.name}
      />

      {!isCard && (
        <div className="text-cyan-400 mt-4 text-center">
          {detalles.map(
            (item) =>
              item.valor && (
                <div key={item.label}>
                  <span className="font-bold text-yellow-300">{item.label}: </span>
                  <span className="text-cyan-200">{item.valor}</span>
                </div>
              )
          )}
        </div>
      )}
    </div>
  );
}
