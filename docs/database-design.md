# FarmRent Database Design

## 1. Overview

FarmRent uses a relational MySQL database to manage users, agricultural equipment, rental requests, and completed rental records.

The database is designed around four main entities:

- Users
- Equipment
- Rental Requests
- Rentals

The relationships between these entities allow the platform to track equipment ownership, rental requests, rental periods, and transaction amounts.

---

## 2. Database

Database name:

```text
farm_rent