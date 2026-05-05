# API Design

## Base Structure

/api/auth  
/api/tenants  
/api/clubs  
/api/tasks  
/api/submissions  

---

## Example: Submit Task

POST /api/submissions

### Request
- taskId
- content

---

## Flow

1. Authenticate user (JWT)
2. Extract:
   - userId
   - tenantId
   - role
3. Validate:
   - user is student
   - membership active
   - user in club
   - task exists
   - task active
   - deadline valid
4. Store submission (versioned)

---

## Responses

- Success → submission stored
- Error → validation/auth failure

---

## Error Cases

- 401 Unauthorized
- 403 Forbidden
- 404 Not Found
- 400 Bad Request