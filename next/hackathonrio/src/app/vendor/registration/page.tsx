"use client";

import Image from "next/image";
import React, { useState } from "react";

export default function Page() {
  const [capacity, setCapacity] = useState("");

  const handleSetCapacity = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCapacity(event.target.value);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="text-xl mb-8">Vendor Registration</div>
      <div className="flex flex-col items-center space-y-4">
        <header>
          <form>
            <input
              type="text"
              value={capacity}
              onChange={handleSetCapacity}
              placeholder="Capacity"
              className="px-4 py-2 border rounded"
            />
          </form>
        </header>
      </div>
    </main>
  );
}
