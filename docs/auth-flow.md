# Authentication & Authorization

## Authentication

- JWT-based

### Token Contains
- userId
- tenantId
- role

---

## Flow

1. User logs in.
2. System checks for the user's **single active membership**.
3. Token issued:
   - **Active User:** Token contains `userId`, `tenantId`, and `role`. Routed to active tenant dashboard.
   - **Alumni/Inactive User:** Token contains only `userId`. Routed to "Global Portfolio" to view past history.
4. Token sent via Authorization header.
5. Backend verifies token.

---

## Authorization

Checks include:
- Membership exists
- Role is valid
- Access belongs to tenant
- Resource ownership (club/task)

---

## Security Rules

- Never trust frontend
- Always validate role and tenant
- Always verify membershi