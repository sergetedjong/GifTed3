# CamPay — Outreach Brief (Cameroon)

**Objective:** Enable XAF Mobile Money cash-out for USDC wallet users via CamPay's licensed PSP capabilities.

**What we need (Phase 1):**
- Sandbox credentials for MTN/Orange payout APIs.
- API endpoints for disbursements, status, webhooks.
- KYC/AML requirements, transaction limits, fee schedule.
- Settlement timelines (T+0/T+1), reconciliation files.

**Integration sketch:**
- `/api/cashout` → POST payout request (phone, operator, amount XAF, reference).
- PSP webhook → updates status to `Completed`/`Failed`.
- Admin limits: per-tx cap, daily velocity, operator routing.

**Narrative:**
- Compliance-first, non-custodial.  
- Target pilot in Douala/Yaoundé with freelancers and SMB payouts.  
- Will co-develop agent training & reconciliation playbooks.
