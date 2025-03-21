import Stepper from "@/components/Stepper/Index";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-start py-24">
      <div className="w-full max-w-screen-lg">
        {/* Static value for now to avoid CSR but can be placed within a child to make it CSR and dynamic */}
        <Stepper currentStep={3} />
      </div>
    </main>
  );
}
