import { useEffect, useState } from "react";

export default function Character({ data }) {
  return (
    <div className="flex flex-col items-center p-4 bg-white rounded-xl shadow">
      <div className="text-xl font-bold mb-2">{data.name}</div>
      <img
        className="h-36 w-36 rounded-lg"
        src={"https://cdn.thesimpsonsapi.com/500" + data.portrait_path}
        alt={data.name}
      />
    </div>
  );
}
