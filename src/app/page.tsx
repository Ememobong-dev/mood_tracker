import { Navbar } from "@/components/Navbar";

export default function Home() {
  return (
  <div>
    <Navbar />
    <div className="flex justify-center items-center pt-40">
      <div>
        <p className="text-2xl text-center font-semibold text-blue-950">Hello, Lisa!</p>
        <h2 className="text-indigo-800 font-bold mt-8 text-center text-5xl">How are you feeling today?</h2>
        <p className="text-center font-semibold text-gray-500 mt-3">Monday, April 12th, 2025</p>
      </div>
      <div>
        <button>Log today&apos;s mood</button>
      </div>

    </div>

  </div>
  );
}
