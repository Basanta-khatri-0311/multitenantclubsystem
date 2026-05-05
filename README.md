# Multi-Tenant Club Management Platform (MERN)

## 📌 Overview

A multi-tenant platform for institutions (schools, colleges, communities) to manage structured, mentor-driven learning through clubs.

Students participate in clubs, complete tasks, submit work, and build a portfolio of achievements over time.

---

## 🧠 Core Architecture

The system follows:

- Multi-Tenant Architecture → Data isolated per institution
- Global User Identity → One user across all tenants
- Sequential Tenancy → Users belong to only one active institution at a time
- Time-Bound Memberships → Tracks user journey and builds a continuous global portfolio
- Dual Visibility Model → Tenant-restricted active view + User-global historical view

---

## 👥 Roles

### Super Admin
- Creates and manages tenants

### Admin (Tenant Owner)
- Manages users, clubs, mentors

### Mentor
- Creates tasks
- Reviews submissions
- Suspends tasks (cannot delete)

### Student
- Joins clubs
- Submits tasks
- Earns points and badges

---

## 🧩 Core Entities

- User (global identity)
- Tenant (institution)
- Membership (user ↔ tenant ↔ role, time-bound)
- Club
- Task
- Submission (versioned)
- Badge

---

## 🔐 Data Visibility

### Tenant Scope
- Admins and mentors can only access their tenant’s data

### User Scope
- Users can view their complete history across all tenants

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
- Only admins can delete
- Memberships are time-bound (Sequential Tenancy)
- Students can join multiple clubs within their active tenant

---

## 🚫 Scope Limitations

- No cross-tenant leaderboard
- No mentor marketplace

---

## 📌 Progress

- [x] System Design
- [x] Core Flow Design
- [ ] Database Schema
- [ ] Backend Implementation
- [ ] Frontend

---

## 🛠️ Tech Stack

- MongoDB
- Express.js
- React.js
- Node.js