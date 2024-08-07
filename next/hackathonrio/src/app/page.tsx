import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="text-xl mb-8">Energy Market</div>
      <div className="flex space-x-4">
        <header>
          <Link href="/client">
            <button className="px-4 py-2 border rounded">Buy Energy</button>
          </Link>
        </header>
        <header>
          <Link href="/vendor">
            <button className="px-4 py-2 border rounded">Vendor</button>
          </Link>
        </header>
      </div>
    </main>
  );
}
