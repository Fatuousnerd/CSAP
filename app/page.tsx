import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="w-full h-screen flex flex-col items-center justify-center gap-4">
        <h1 className="font-bold text-3xl">
          Cryptography, Steganography, Internet & Web Protocols
        </h1>
        <div className="flex items-center gap-3">
          <Button>
            <Link href={'/ciphers'}>Text Ciphers</Link>
          </Button>
        </div>
      </div>
    </>
  );
}
