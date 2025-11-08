# Kora — Outreach Brief (XAF/XOF)

**Objective:** Evaluate Kora for Mobile Money disbursements in XAF/XOF corridors to support cash-outs and SMB payouts.

**What we need:**
- Coverage map (Cameroon + neighbors), operators supported.
- API docs for MoMo disbursements, status webhooks.
- KYC policy & required fields, blacklists, chargeback policies.
- Pricing: per-transaction + FX spreads if applicable.

**Integration sketch:**
- Unified payout API with operator detection by MSISDN.
- Webhook verification (HMAC), retries, reconciliation.
- Tiered limits by KYC level and risk signals.
