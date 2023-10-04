"use client"
import BouncingShapes from "@/components/bouncingshapes/BouncingShapes";
import GradientImage from "@/components/gradientimage/GradientImage";

export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col justify-between">
      <div className="bg-slate-700 h-400 items-center relative">
        <div className="h-200  flex-1"><BouncingShapes/></div>
        <div className="flex-1 absolute inset-0 flex justify-center items-center">
          <GradientImage />
        </div>
      </div>
    </main>
  );
}
