# Gifted XAF Wallet — Vercel Demo

This repo is a minimal Next.js **App Router** prototype for investor demos.

## Quick start

```bash
# 1) Install deps
pnpm install    # or: npm install / yarn

# 2) Run locally
pnpm dev        # http://localhost:3000

# 3) Deploy to Vercel
# - Push to GitHub
# - Import into Vercel as a Next.js app
# - Set build command: next build (default)
# - Set output: .vercel/output (auto)
```

## Pages
- `/` — Overview & how-to demo
- `/wallet` — Connect wallet (stub), show address & balance (mock)
- `/send` — Send USDC flow (mock tx confirmation)
- `/cashout` — Request Mobile Money cash-out (mock queue & settle)
- `/kyc` — KYC verify button (stub)
- `/admin` — KPIs & notes for investor narrative

## Swapping stubs for real integrations

- **Wallet:** install and configure `wagmi`, `viem`, and `@rainbow-me/rainbowkit`. Replace `ConnectStub` with `ConnectButton` and add `WagmiConfig` + `RainbowKitProvider` in `app/providers.tsx`.
- **USDC:** choose Base or Stellar for demo. For EVM, add an ERC-20 USDC address (testnet), read balance via `viem`, and execute transfers with `wagmi` write hooks.
- **Cash-out:** integrate with a licensed PSP providing MTN/Orange MoMo payouts (e.g., CamPay/Kora). Implement API route `/api/cashout` and webhook `/api/psp-webhook`.
- **KYC:** integrate Smile ID or Sumsub SDK. Store verification status per wallet/user.

## Compliance posture (draft)
- Non-custodial wallet: no fiat custody by the app.  
- Fiat legs delegated to licensed PSPs; enforce KYC tiers & limits aligned to partners.  
- Maintain AML policy, sanctions/PEP screening, and logs for audits.

## Tech
- Next.js 14 (App Router)  
- Tailwind CSS  
- TypeScript
