# Database Design

## Design Principles

- Use references (ObjectId)
- Avoid deep nesting
- Maintain tenant isolation
- Support versioning

---

## Collections

### users
- Global identity

### tenants
- Institution data

### memberships
- userId
- tenantId
- role
- startDate
- endDate

*(Note: Enforced via Partial Unique Index on `userId` where `endDate: null` to guarantee only one active membership globally.)*

---

### clubs
- tenantId
- mentorIds
- studentIds

---

### tasks
- clubId
- mentorId
- tenantId
- status (active/suspended)
- deadline

---

### submissions
- taskId
- userId
- tenantId
- version
- isLatest

---

### badges
- userId
- tenantId
- type
- awardedAt

---

## Notes

- All queries must include tenantId (except user-global queries)
- Submissions must support versioning
- Membership enables role flexibility