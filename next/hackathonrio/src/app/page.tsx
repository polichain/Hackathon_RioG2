import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      Energy Market
      <header>
        <Link href="/client">
          <button>Buy Energy</button>
        </Link>
      </header>
      <header>
        <Link href="/vendor">
          <button>Vendor page</button>
        </Link>
      </header>
    </main>
  );
}
