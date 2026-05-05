# Multi-Tenant Club Management Platform (MERN)

## 📌 Overview

This project is a multi-tenant platform designed for institutions such as schools, colleges, and communities to manage technical clubs and structured learning.

It enables mentor-driven learning through tasks, student submissions, reviews, and performance tracking via badges and points.

---

## 🧠 Core Architecture

The system follows a multi-tenant + user-centric design:

- Each institution is a Tenant
- Users have a global identity
- Users participate in tenants via time-bound memberships
- Data is isolated per tenant
- Users can view their aggregated progress across tenants

---

## 👥 Roles

### Super Admin
- Manages platform
- Creates tenants

### Admin (Tenant Owner)
- Manages institution
- Creates clubs
- Assigns mentors
- Manages users

### Mentor
- Assigned to clubs
- Creates and manages tasks
- Reviews submissions
- Can suspend tasks

### Student
- Joins clubs
- Submits tasks
- Earns badges and points

---

## 🧩 Core Entities

- User → Global identity
- Tenant → Institution
- Membership → User ↔ Tenant ↔ Role (time-bound)
- Club → Tenant-specific group
- Task → Assigned by mentor
- Submission → Student work (versioned)
- Badge → System-generated achievement

---

## 🔗 Relationships

User → Membership → Tenant  
Tenant → Clubs  
Club → Tasks  
Task → Submissions  
User → Submissions  

---

## 🔐 Data Visibility Model

### Tenant Scope
- Admins and mentors can only access data within their tenant

### User Scope
- Users can view their complete activity across all tenants

---

## 📊 Metrics

- Tenant-level points (isolated)
- Global aggregated points (portfolio view)

---

## 📝 Submission System

- Multiple submissions allowed
- Versioned submissions
- Only one marked as latest

---

## ⚙️ Key Rules

- Tasks can be suspended (hidden)
- Only admins can delete resources
- Students can join multiple clubs (limited by tenant config)
- Memberships are time-bound

---

## 🚫 Current Scope

- No cross-tenant leaderboard
- No mentor marketplace

---

## 📌 Progress

- [x] System design
- [x] Core flow design
- [ ] Database schema
- [ ] Backend
- [ ] Frontend

---

## 🛠️ Tech Stack

- MongoDB
- Express.js
- React.js
- Node.