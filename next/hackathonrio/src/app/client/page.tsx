"use client"; 

import { useState } from 'react';
import Image from 'next/image';

export default function Page() {
  const [showVendors, setShowVendors] = useState(false);
  const vendors = ['Vendor A', 'Vendor B', 'Vendor C']; //ta estatico mas tem que mudar isso//

  const toggleVendors = () => {
    setShowVendors(!showVendors);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="text-xl mb-8">Buy Energy</div>
      <div className="flex flex-col items-center space-y-4">
        <header>
          <button onClick={toggleVendors} className="px-4 py-2 border rounded">
            Select Vendor
          </button>
          {showVendors && (
            <ul className="mt-4 border p-4 rounded space-y-2">
              {vendors.map((vendor, index) => (
                <li key={index} className="py-1 px-2 hover:bg-gray-200 rounded cursor-pointer">
                  {vendor}
                </li>
              ))}
            </ul>
          )}
        </header>
      </div>
    </main>
  );
}
