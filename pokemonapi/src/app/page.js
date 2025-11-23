"use client";

import { useEffect, useState } from "react";
import Character from "@/components/Character";

const API_BASE_URL = "https://thesimpsonsapi.com/api";

export default function SimpsonsPage() {
  const [index, setIndex] = useState(1);
  //   const listOfUrls = [];

  //   for (let i = 1; i <= 100; i++) {
  //     listOfUrls.push();
  //   }

  return (
    <div className="flex flex-col gap-4">
      <input
        type="number"
        min="1"
        max="10"
        className="border text-xl"
        onChange={(e) => {
          setIndex(e.target.value);
        }}
      />
      <hr />
      <Character url={`${API_BASE_URL}/characters/${index}`}></Character>
    </div>
  );
}