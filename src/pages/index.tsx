import { Inter } from "next/font/google";
import TheGarden from "@/components/TheGarden";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={inter.className}>
      <TheGarden />
    </main>
  );
}
