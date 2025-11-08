# Gifted XAF Wallet — Prototype

✅ Ready-to-deploy Next.js prototype for a Web3 wallet focused on XAF markets.  
Use this repo to **demo on Vercel** and pitch investors with the included **DECK.md**.

## Install & Run
```bash
pnpm install   # (or npm/yarn)
pnpm dev       # http://localhost:3000
```

## Deploy to Vercel
- Push to GitHub → Import in Vercel → Deploy (Next.js default settings).

## Where to edit first
- `app/page.tsx`: landing copy for your pitch.  
- `app/cashout/page.tsx`: update fields/validation.  
- `docs/DECK.md`: your investor slides outline.  
- `docs/partner_briefs/*`: outreach briefs.

## Next steps (swap stubs)
- Add wagmi/RainbowKit providers.  
- Choose Base/Stellar testnet, wire USDC balance & transfers.  
- Implement `/api/cashout` with a licensed PSP.  
- Add KYC SDK (Smile ID / Sumsub).

---

© 2025 Gifted Capital (draft). For demo purposes only.
