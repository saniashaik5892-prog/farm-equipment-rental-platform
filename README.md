<div align="center">

<img src="./assets/farmrent-logo.png" width="220" alt="FarmRent logo" />

# 🚜 FarmRent — Farm Equipment Rental Platform

**Connecting farmers with equipment owners, so machinery is a rental away, not a purchase.**

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![MySQL](https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

[Live Demo](#) · [Report Bug](#) · [Request Feature](#)

</div>

---

## 📖 About The Project

Small and mid-scale farmers often need equipment — tractors, harvesters, ploughs, seeders, sprayers, cultivators — only for a few days a season, but buying it outright is rarely affordable. **FarmRent** is a web platform that closes that gap: equipment **owners** list their machinery, and **farmers** browse, compare, and book it by the day, all in one place.

The platform supports two user roles — **Farmer** (renter) and **Owner** — each with their own dashboard, and tracks the full booking lifecycle from request → confirmation → active rental → completion.

<div align="center">
<img src="./assets/farmrent-homepage.png" width="85%" alt="FarmRent homepage" />
</div>

---

## ✨ Features

- 🔍 **Browse & filter equipment** by category, price range, location, and availability
- 📄 **Detailed equipment pages** with specs, owner info, and ratings
- 📅 **Booking flow** — pick dates, see total cost instantly, request to rent
- 👤 **Role-based accounts** — separate flows for Farmers and Equipment Owners
- 📊 **Farmer dashboard** — booking history, upcoming/completed rentals, total spend, recommended equipment
- 🔐 **Login & registration**, including "Continue with Google" option
- 💬 **Messaging** between renters and owners *(planned/in progress)*
- ⭐ **Reviews & ratings** on equipment listings
- 📍 Location-aware search, tuned for towns around Andhra Pradesh (Vijayawada, Guntur, Tenali, Amaravati, etc.)

---

## 🖼️ Screenshots

<table>
<tr>
<td width="50%"><img src="./assets/farmrent-equipment-list.png" width="100%" alt="Equipment listing" /><br/><em>All Equipment — filters & search</em></td>
<td width="50%"><img src="./assets/farmrent-equipment-details.png" width="100%" alt="Equipment details" /><br/><em>Equipment details & booking panel</em></td>
</tr>
<tr>
<td width="50%"><img src="./assets/farmrent-dashboard.png" width="100%" alt="Farmer dashboard" /><br/><em>Farmer dashboard</em></td>
<td width="50%"><img src="./assets/farmrent-login.png" width="100%" alt="Login page" /><br/><em>Login</em></td>
</tr>
</table>

---

## 🧰 Tech Stack

| Layer | Technology |
|---|---|
| Frontend | HTML5, CSS3, JavaScript |
| Backend | Node.js, Express.js |
| Database | MySQL |
| Auth | Email/password (Google OAuth planned) |

---

## 🗄️ Database Schema

The schema centers on four tables:

| Table | Purpose | Key columns |
|---|---|---|
| `users` | Farmers & owners | `full_name`, `email`, `phone`, `password`, `role`, `location` |
| `equipment` | Listings created by owners | `owner_id`, `equipment_name`, `category`, `price_per_day`, `power_capacity`, `fuel_type`, `availability` |
| `rental_requests` | Booking requests before confirmation | `equipment_id`, `renter_id`, `start_date`, `end_date`, `status` |
| `rentals` | Confirmed/active/completed bookings | `request_id`, `equipment_id`, `renter_id`, `total_days`, `total_amount`, `rental_status` |

> ⚠️ The seed data uses **plaintext demo passwords** for convenience. In production, passwords are hashed (e.g. bcrypt) before being stored — never store plaintext passwords.

---

## 📁 Project Structure

```
farm-equipment-rental-platform/
├── database/
│   ├── seed.sql          # Sample users, equipment, requests & rentals
│   └── queries.sql       # Common queries used by the app
├── server/                # Express app, routes, controllers (Node.js backend)
├── public/                # Static frontend (HTML/CSS/JS)
│   ├── index.html         # Homepage
│   ├── login.html
│   ├── register.html
│   ├── equipments.html
│   ├── equipment-details.html
│   └── dashboard.html
├── .env.example
├── package.json
└── README.md
```

*(Adjust folder names above to match your actual repo layout.)*

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v18+ recommended)
- [MySQL](https://www.mysql.com/) (v8+)

### Installation

```bash
# 1. Clone the repo
git clone https://github.com/saniashaik5892-prog/farm-equipment-rental-platform.git
cd farm-equipment-rental-platform

# 2. Install dependencies
npm install

# 3. Configure environment variables
cp .env.example .env
# then edit .env with your DB credentials, e.g.:
# DB_HOST=localhost
# DB_USER=root
# DB_PASSWORD=yourpassword
# DB_NAME=farm_rent
# PORT=5000

# 4. Create the database and load sample data
mysql -u root -p -e "CREATE DATABASE farm_rent;"
mysql -u root -p farm_rent < database/seed.sql

# 5. Start the server
npm run dev
```

The app should now be running at `http://localhost:5000`.

### Demo Accounts

| Role | Email | Password |
|---|---|---|
| Farmer | ravi@example.com | demo_password_123 |
| Farmer | suresh@example.com | demo_password_123 |
| Owner | arjun@example.com | demo_password_123 |
| Owner | kiran@example.com | demo_password_123 |
| Owner | lakshmi@example.com | demo_password_123 |

---

## 🗺️ Roadmap

- [ ] In-app messaging between renters and owners
- [ ] Payment gateway integration
- [ ] Owner-side dashboard with listing management
- [ ] Google OAuth login
- [ ] Equipment availability calendar
- [ ] Ratings & review submission flow
- [ ] Mobile-responsive polish

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

## 👩‍💻 Author

**Sania Shaik**
B.Tech CSE (IoT), VVIT · [GitHub](https://github.com/saniashaik5892-prog)

<div align="center">
<em>Built to make farm equipment a rental away, not a purchase away.</em> 🌾
</div>
