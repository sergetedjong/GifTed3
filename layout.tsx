import "./globals.css";
import type { Metadata } from "next";
import Nav from "@/components/Nav";

export const metadata: Metadata = {
  title: "Gifted XAF Wallet Demo",
  description: "Non-custodial demo wallet for XAF markets (USDC on L2)",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <main className="container py-8 space-y-6">{children}</main>
      </body>
    </html>
  );
}
