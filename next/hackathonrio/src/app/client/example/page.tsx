"use client";

import Image from "next/image";
import React, { useState } from "react";

export default function Page() {
  const [amount, setAmount] = useState<number | "">("");
  const [price, setPrice] = useState<number | "">(0);

  const handleSetAmount = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value === "" ? "" : Number(event.target.value);
    setAmount(value);
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      event.preventDefault(); //faz com q só atualize o price dps do enter
      const value = amount === "" ? 0 : amount;
      setPrice(value * 2 + 3); // Calcula o preço
    }
  }

/*
const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
      const value = amount === "" ? 0 : amount;
      let calculatedPrice = 0;

      if (capacity > value) {
        calculatedPrice = preco_da_energia * (capacity - value);
      } else if (capacity < value) {
        calculatedPrice = preco_da_energia * capacity
        calculatedPrice = calculatedPrice * tax * (value - capacity);
      }

      setPrice(calculatedPrice);
    }
  }
  */
  

  

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="text-xl mb-8">Purchase page</div>
      <div className="flex flex-col items-center space-y-4">
        <header> 
          <form onSubmit={(e) => e.preventDefault()}> 
            <input
              type="number"
              value={amount}
              onChange={handleSetAmount}
              onKeyPress={handleKeyPress}
              placeholder="Amount"
              className="px-4 py-2 border rounded"
            />
          </form>
        </header>
        <div className="text-lg">
          PRICE: {price}
        </div>
      </div>
    </main>
  );
}
