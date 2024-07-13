import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="text-xl mb-8">Buy Energy</div>
      <div className="flex flex-col items-center space-y-4">
        <header>
        <Link href="/client/select">
          <button className="px-4 py-2 border rounded">Select Vendor</button>
          </Link>
        </header>
      </div>
    </main>
  );
}
