import Stepper from "@/components/Stepper/Index";
import fetchSkips from "@/lib/fetchSkips";
import SkipsGrid from "@/components/Skips/Index";

export default async function Home() {
  const skips = await fetchSkips();

  return (
    <main className="min-h-screen flex flex-col items-center justify-start py-24">
      <div className="w-full max-w-screen-lg">
        {/* Static value for now to avoid CSR but can be placed within a child to make it CSR and dynamic */}
        <Stepper currentStep={3} />
        <h1 className="mt-12 font-semibold">Choose your skip size</h1>
        <h3 className="text-xl font-semibold text-neutral-600 mt-2">
          Select the skip size that best suits your needs
        </h3>
        <div className="mt-8">
          <SkipsGrid skips={skips} />
        </div>
      </div>
    </main>
  );
}
