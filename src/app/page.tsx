import GradientImage from "@/components/gradientimage/GradientImage";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="bg-gray-900 h-200"></div> {/* This div has a height of 200px */}
      <div className="flex-grow bg-slate-950">
        <GradientImage />
      </div>
    </main>
  );
}
