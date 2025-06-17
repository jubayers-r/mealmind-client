# 🍽️ MealMind - Optimizing Restaurants, One Bite at a Time.

A fully responsive, feature-rich restaurant management platform built with the MERN stack. It allows users to browse foods, place orders, manage their items, and streamline restaurant operations for admins and staff. Designed to be eye-pleasing, recruiter-friendly, and technically robust with JWT-authenticated private routes, Firebase login, and complete MongoDB backend integration.

## 🚀 Live Demo

[🔗 View Deployed App](https://restaurant-management-e0449.web.app/)
[🔗 View Server (Render)](restaurant-management-server-chi-five.vercel.app)

---

## 🎯 Project Purpose

To develop a user-centric restaurant management system that improves customer interaction and streamlines internal processes, offering a seamless experience for browsing, ordering, and managing food items—targeted at both restaurant staff and diners.

---

## 🧰 Tech Stack

- **React.js** + **Vite**
- **Tailwind CSS**
- **React Router DOM**
- **Firebase Authentication**
- **MongoDB + Express + Node.js (MERN)**
- **JWT (JSON Web Token) for Auth**
- **SweetAlert2**
- **React Toastify**
- **Swiper.js (Sliders)**
- **Yet-Another-React-Lightbox**
- **Moment.js (for date formatting)**

---

## 📦 Installation & Setup

### Client:

```bash
git clone https://github.com/your-username/restaurant-client.git
cd restaurant-client
npm install
npm run dev
```

### Server:

```bash
git clone https://github.com/Programming-Hero-Web-Course4/b11a10-server-side-jubayers-r
cd b11a10-server-side-jubayers-r
npm init -y
node index.js
```

## 🔐Environment Variables

### Client Side (.env)

```env
VITE_apiKey=your_api_key
VITE_authDomain=your_auth_domain
VITE_projectId=your_project_id
VITE_storageBucket=your_storage_bucket
VITE_messagingSenderId=your_msg_id
VITE_appId=your_app_id
```
### Server Side (.env)

```env
db_user=your_cluster_username
db_pass=your_cluster_password
ACCESS_TOKEN_SECRET=your_jwt_secret
```

---

## 🌟 Key Features

### 🌐 Global Navigation

- Home, All Foods, Gallery, Add Food, My Foods, My Orders (based on auth)
- Conditional Login/Logout & Profile Picture
- Responsive Navbar and Footer

### 🏠 Home Page

- Hero Banner Slider using Swiper.js
- Top 6 Selling Foods (based on purchase count)
- See All Foods Button
- Two extra sections: Promotional Banner and FAQ

### 📚 All Foods Page (Public)

- Search Bar (by food name)
- All foods listed with quantity, info, and detail button
- Page title section

### 📸 Gallery Page (Public)

- 10+ static images using lightbox viewer

### 📄 Single Food Page (Public)

-Full food details + purchase count
-"Purchase" button (disabled if user is owner or quantity is 0)

### 🛒 Food Purchase Page (Private)

- Read-only user info from auth
- Inputs: Quantity, Confirm Button
- Auto-stamped purchase date (Date.now())
- Quantity check before purchase
- Toast alert on successful order

### ➕ Add Food Page (Private)

- Add new food form with all required fields
- Includes uploader’s name/email from auth
- Adds item to DB with toast on success

### 📁 My Foods Page (Private)

- Shows only current user's items
- Update button opens modal/form
- Secure: users can't edit others' items

### 📦 My Orders Page (Private)

- Lists user's orders
- Shows buying date (formatted with moment)
- Includes Delete Button

### 🔒 Authentication

- Firebase (Email/Password + Google)
- JWT issued & stored on login
- All private routes secured with JWT verification
- User info protected and used throughout app

### 🧪 Testing and UX

- ✅ No CORS/404/504 errors
- ✅ Firebase authorized domains set
- ✅ Routes reload correctly (SPA behavior)
- ✅ No login redirect on private route reload
- ✅ Fully responsive on desktop, tablet, and mobile
- ✅ Theme toggler (Light/Dark mode)
- ✅ Minimalist and recruiter-friendly UI

---


## 📂 Folder Structure (Simplified)

```bash
📦restaurant-app/
├── 📁public/
├── 📁src/
│   ├── 📁assets/
│   ├── 📁components/
│   ├── 📁layout/
│   ├── 📁pages/
│   │   ├── 📁Home/
│   │   ├── 📁Login/
│   │   ├── 📁Register/
│   │   ├── 📁AllFoods/
│   │   ├── 📁FoodDetails/
│   │   ├── 📁Gallery/
│   │   ├── 📁AddFood/
│   │   ├── 📁MyFoods/
│   │   ├── 📁MyOrders/
│   │   └── 📁Purchase/
│   ├── 📁context/
│   ├── 📁hooks/
│   ├── 📁routes/
│   ├── 📁firebase/
│   ├── App.jsx
│   ├── main.jsx
├── .env
├── .gitignore
├── vite.config.js
└── README.md
```

---

## ✅ Challenges & Solutions

- ✅ Purchase logic disables button if quantity = 0 or buyer is the owner
- ✅ Prevented quantity overflow
- ✅ Firebase Auth with JWT integration
- ✅ Fully protected private routes (no redirect on reload)
- ✅ Search functionality for foods
- ✅ Modal-based updating for better UX
- ✅ Responsive lightbox gallery
- ✅ Dark/Light theme switcher with persistent state
---

## 🧑‍💼 Author

**Made with ❤️ by Jubayer Shikder** </br>
[🐦 Twitter (X)](https://x.com/jubayers_r) • [📧 Email](mailto:jubayerxshikder@gmail.com) • [💼 LinkedIn](https://linkedin.com/in/jubayers-r) • [💻 GitHub](https://github.com/jubayers-r)</br>
Feel free to reach out if you'd like to collaborate or need help using the project!

---

## 📜 License

This project is licensed under the [MIT License](LICENSE) — free to use, modify, and fork..