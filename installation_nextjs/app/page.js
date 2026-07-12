import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h2 className="text-3xl font-bold text-zinc-800 dark:text-zinc-200">
          Welcome to Next.js! 
        </h2>
      </main>
    </div>
  );
}
