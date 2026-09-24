# FarmRent - Farm Equipment Rental Platform

FarmRent is a web-based agricultural equipment rental platform designed to connect farmers with equipment owners.

The platform allows users to browse agricultural equipment, search and filter listings, view equipment details, and submit rental requests.

---

## Features

### Farmer Features

- User registration
- User login
- Browse agricultural equipment
- Search equipment
- Filter by category
- Filter by location
- Filter by maximum rental price
- View equipment details
- Select rental dates
- Submit rental requests
- View rental activity through the dashboard

### Equipment Owner Features

- Owner registration
- Equipment listing
- Equipment information management
- Rental price management
- Equipment availability tracking
- Rental request management

### Database Features

- User management
- Equipment management
- Rental request tracking
- Rental record management
- Equipment ownership relationships
- Rental amount calculation
- SQL search and reporting queries

---

## Technology Stack

### Frontend

- HTML5
- CSS3
- JavaScript

### Database

- MySQL

### Development Tools

- VS Code
- Git
- GitHub

---

## Project Structure

```text
farm-equipment-rental-platform/
│
├── frontend/
│   │
│   ├── index.html
│   ├── equipment.html
│   ├── equipment-details.html
│   ├── login.html
│   ├── register.html
│   ├── dashboard.html
│   │
│   ├── css/
│   │   └── style.css
│   │
│   ├── js/
│   │   ├── app.js
│   │   ├── equipment.js
│   │   ├── equipment-details.js
│   │   ├── auth.js
│   │   └── dashboard.js
│   │
│   └── assets/
│       └── images/
│
├── database/
│   ├── schema.sql
│   ├── seed.sql
│   └── queries.sql
│
├── docs/
│   ├── database-design.md
│   └── project-flow.md
│
├── screenshots/
│
├── .gitignore
├── LICENSE
└── README.md