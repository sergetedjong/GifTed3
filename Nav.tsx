"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/wallet", label: "Wallet" },
  { href: "/send", label: "Send" },
  { href: "/cashout", label: "Cash-out" },
  { href: "/kyc", label: "KYC" },
  { href: "/admin", label: "Admin" },
];

export default function Nav() {
  const pathname = usePathname();
  return (
    <nav className="border-b border-white/10">
      <div className="container flex items-center justify-between h-14">
        <Link href="/" className="font-semibold">Gifted XAF Wallet</Link>
        <div className="flex gap-3">
          {links.map(l => (
            <Link key={l.href} href={l.href}
              className={`px-3 py-1 rounded-md ${pathname===l.href ? "bg-white/10" : "hover:bg-white/5"}`}>
              {l.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
