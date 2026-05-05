# System Design

## 1. Multi-Tenant Model

- Each institution is a tenant
- All data is scoped using tenantId

---

## 2. User & Membership Model

### User
- Global identity

### Membership
Represents user participation in a tenant.

Fields:
- userId
- tenantId
- role (admin | mentor | student)
- startDate
- endDate (null if active)

Rules:
- A user can have multiple historical memberships.
- **Sequential Tenancy:** A user can only have **one active membership across the entire platform** at a time.
- To join a new institution (tenant), their active membership must first be ended (`endDate` set).

---

## 3. Core Entities

- Tenant → owns clubs
- Club → belongs to tenant
- Task → belongs to club
- Submission → belongs to task + user

---

## 4. Data Visibility Model

### Tenant Scope
Query filtered by:
tenantId

Used by:
- Admin
- Mentor

---

### User Scope
Query filtered by:
userId

Used by:
- Student profile

---

## 5. Task Lifecycle

States:
- Active → visible
- Suspended → hidden

Rules:
- Tasks are not deleted when mentor is removed

---

## 6. Submission System

- Multiple submissions per task
- Versioned system
- Only one submission marked as latest

---

## 7. Student Rules

- Can join multiple clubs
- Limit defined by tenant configuration

---

## 8. Core Flow: Task Submission

1. Student sends submission request
2. System verifies:
   - authentication
   - membership
   - role = student
   - club association
   - task status
3. Submission stored
4. Previous submission marked not latest
5. New submission marked latest