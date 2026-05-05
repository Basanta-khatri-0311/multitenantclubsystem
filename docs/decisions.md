# Engineering Decisions

## Multi-Tenant Design
Use tenantId-based isolation

Reason:
- Simpler
- Scalable

---

## Role System
Roles scoped via membership

Reason:
- Flexible across tenants

---

## Submission Versioning
Store all submissions

Reason:
- History tracking
- Fair evaluation

---

## Data Visibility Model
Tenant isolation + user aggregation

Reason:
- Secure + supports portfolio

---

## Membership Model
Sequential, Time-bound memberships (Strictly 1 active tenant per user).

Reason:
- Reflects real-world transitions (e.g., graduating high school, then joining college).
- Simplifies Auth UX (no context-switching required).
- Builds a unified, continuous historical portfolio for the user.

---

## Task Ownership
Mentor manages, admin deletes

Reason:
- Clear separation of responsibility