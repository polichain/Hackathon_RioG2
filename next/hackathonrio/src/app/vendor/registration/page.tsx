"use client";

import Image from "next/image";
import React, { useState } from "react";

export default function Page() {
  const [capacity, setCapacity] = useState<number | "">("");
  const [tax, setTax] = useState<number | "">("");
  const [place, setPlace] = useState("");

  const handleSetPlace = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPlace(event.target.value);
  };

  const handleSetCapacity = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCapacity(event.target.value === "" ? "" : Number(event.target.value));
  };

  const handleSetTax = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTax(event.target.value === "" ? "" : Number(event.target.value));
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="text-xl mb-8">Vendor Registration</div>
      <div className="flex flex-col items-center space-y-4">
        <header>
          <form>
            <input
              type="number"
              value={capacity}
              onChange={handleSetCapacity}
              placeholder="Capacity"
              className="px-4 py-2 border rounded"
            />
            <input
              type="number"
              value={tax}
              onChange={handleSetTax}
              placeholder="Tax"
              className="px-4 py-2 border rounded"
            />
            <input
              type="text"
              value={place}
              onChange={handleSetPlace}
              placeholder="Place"
              className="px-4 py-2 border rounded"
            />
          </form>
        </header>
      </div>
    </main>
  );
}
