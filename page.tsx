import { APP } from "@/lib/config";

export default function Home() {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      <section className="card">
        <h1 className="text-2xl font-semibold mb-2">A wallet built for {APP.region}</h1>
        <p className="text-white/80 mb-4">
          This demo shows a non-custodial wallet using {APP.stable} on {APP.chain},
          with a future Cash-out flow to Mobile Money (MTN/Orange) via licensed PSP partners.
        </p>
        <ul className="list-disc ml-6 space-y-1 text-white/80">
          <li>Create / connect wallet</li>
          <li>Check balances & network</li>
          <li>Send {APP.stable}</li>
          <li>Request Cash-out to Mobile Money (stubbed)</li>
          <li>KYC verification (stubbed)</li>
          <li>Admin KPIs</li>
        </ul>
      </section>
      <section className="card">
        <h2 className="text-xl font-semibold mb-2">How to demo</h2>
        <ol className="list-decimal ml-6 space-y-2 text-white/80">
          <li>Click Wallet → connect (stub) to simulate an address.</li>
          <li>Go to Send → craft an ERC-20 transfer (no chain call in stub).</li>
          <li>Use Cash-out → submit Mobile Money request (mock backend).</li>
          <li>KYC → mark user as verified (mock).</li>
          <li>Admin → see basic KPIs change.</li>
        </ol>
        <p className="text-white/60 mt-4 text-sm">Swap stubs with wagmi/RainbowKit + PSP APIs when ready.</p>
      </section>
    </div>
  );
}
