import Image from "next/image";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="text-xl mb-8">Vendor Page</div>
      <div className="flex flex-col items-center space-y-4">
        <header>
          <button className="px-4 py-2 border rounded">Already Vendor</button>
        </header>
        <header>
          <button className="px-4 py-2 border rounded">Become a Vendor</button>
        </header>
      </div>
    </main>
  );
}
