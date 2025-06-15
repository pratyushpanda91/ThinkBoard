# 📝 ThinkBoard

A full-stack **MERN** (MongoDB • Express • React • Node.js) application for creating, reading, updating, and deleting notes.  
It features a fully functional REST API, rate limiting using Upstash Redis, and a responsive UI with TailwindCSS and DaisyUI.

🌐 **Live Demo:** [https://ThinkBoard.com](https://thinkboard-bc5q.onrender.com/) <!-- Replace with actual Render URL -->

---

## ✨ Features

- 🗒️ Create, Read, Update and Delete notes
- ⚙️ RESTful API built with Express and MongoDB
- 🔐 Rate Limiting using Upstash Redis (for real-world scalability)
- 💻 Responsive Frontend built with Vite + React
- 🔁 Hot Reloading with Vite and Nodemon
- 🧩 Clean and Optimized Project Structure
- 🚀 Easy Deployment with Render

  ## 📦 Project Dependencies – Why Each One Matters

- 🧠 **React 19** – Latest stable version of React for fast, component-based UI rendering
- ⚡ **Vite 6** – Ultra-fast dev environment with instant HMR and optimized production builds
- 🪄 **Lucide React** – Clean, consistent icon pack for modern UI needs
- 🍞 **React Hot Toast** – Toast notifications for a better user experience
- 🛣️ **React Router 7** – Client-side routing with clean nested route support
- 🌬️ **TailwindCSS 3 + DaisyUI** – Utility-first CSS framework with prebuilt UI components
- 🌐 **Axios** – Promise-based HTTP client to interact with backend APIs easily
- 🧬 **Express.js** – Minimalist web framework to build APIs quickly and efficiently
- 🛡️ **CORS** – Secures your API from unauthorized frontend origins
- 🛠️ **Mongoose 8** – Object Data Modeling (ODM) library for MongoDB with schema-based structure
- 🔐 **dotenv** – Loads environment variables for secure secret management
- 🧊 **Upstash Redis** – Serverless Redis used here for **Rate Limiting** to throttle malicious or excessive requests in production

---

## 🚀 Deployment on Render – How & Why

- 🧱 **Monorepo Setup** – Both frontend and backend reside in a single repo, simplifying deployment
- 🔄 **Render Commands**:
  - `npm run build` → Installs all dependencies, builds frontend, places it into `backend/public`
  - `npm run start` → Starts the Express server and serves the full-stack app
- 🔑 **Environment Variables** are set in the Render dashboard (e.g. `MONGODB_URI`, `UPSTASH_REDIS_REST_URL`)
- 🔗 **Single Live URL** – React frontend and Express backend served from the same domain, simplifying CORS & routing

👉 **Why Render?**  
It supports monorepos, automatic Git deploys, and offers free tiers ideal for full-stack projects like ThinkBoard.

---


## 📜 License – What You Can Do

This project is licensed under the MIT License. See the `LICENSE` file for details.
- ✂️ **You can**:
  - Use, copy, modify, and distribute the code
  - Add your own features or branding
- ❗ **You must**:
  - Include the original license
  - Give proper attribution to the original creator

---

## Author

- **Name**: `Pratyush Panda`
- **GitHub**: [ Profile](https://github.com/pratyushpanda91)
- **X**: [Twitter Profile](https://x.com/pandapratyush91)
- **LinkedIn**: [Profile](https://www.linkedin.com/in/pratyushpanda91/)

---

> 💡 This license encourages learning and collaboration while protecting ownership.
