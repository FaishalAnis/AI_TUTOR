# 🤖 SynapseAI – AI-Powered Intelligent Learning Tutor  

**SynapseAI** is a full-stack **AI-powered tutoring platform** that uses Natural Language Processing (NLP) to understand learners’ queries and recommend the most relevant study materials.  
It’s built with the **MERN stack (MongoDB, Express, React, Node.js)** and integrates **TF–IDF** and **Cosine Similarity** algorithms to deliver personalized learning experiences.  

---

## 🌟 Features  

- 🧠 **AI/NLP Recommendation System** – Learners can enter any topic (e.g., “Learn probability and statistics for ML”), and the system suggests the best educational resources.  
- 🔐 **User Authentication (JWT)** – Secure login and registration using encrypted JWT tokens.  
- 📊 **Dynamic Dashboard** – Personalized user dashboard with quick access to learning tools.  
- 🔍 **Search Interface** – Real-time query interface for AI-driven topic recommendations.  
- 💻 **Responsive UI** – Clean, modern frontend built with **React + Tailwind CSS**.  
- ☁️ **MongoDB Atlas Integration** – Cloud-hosted database for users and study materials.  

---

## 🧠 Tech Stack  

| Layer | Technology Used |
|-------|------------------|
| **Frontend** | React, Tailwind CSS, Axios, React Router DOM |
| **Backend** | Node.js, Express.js |
| **Database** | MongoDB Atlas |
| **AI/NLP Engine** | Natural (TF–IDF + Cosine Similarity) |
| **Authentication** | JSON Web Token (JWT) |
| **Deployment** | (optional) Vercel / Render / Railway |

---

## 📁 Project Structure  

AI_TUTOR/
│
├── backend/
│ ├── server.js
│ ├── routes/
│ ├── models/
│ ├── controllers/
│ ├── middleware/
│ ├── seed/materialSeed.js
│ └── .env
│
├── frontend/
│ ├── src/
│ │ ├── pages/
│ │ │ ├── Login.jsx
│ │ │ ├── Register.jsx
│ │ │ ├── Dashboard.jsx
│ │ │ └── Search.jsx
│ │ ├── components/
│ │ │ └── Navbar.jsx
│ │ ├── api.js
│ │ ├── App.jsx
│ │ └── main.jsx
│ └── tailwind.config.js
│
└── README.md

yaml
Copy code

---

## ⚙️ Installation & Setup  

### 1️⃣ Clone the Repository  
```bash
git clone https://github.com/your-username/synapseAI.git
cd synapseAI
2️⃣ Backend Setup
bash
Copy code
cd backend
npm install
Create a .env file inside the backend folder and add:

ini
Copy code
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
Seed the database with sample learning materials:

bash
Copy code
node seed/materialSeed.js
Run the backend server:

bash
Copy code
npm run dev
Backend runs on:
👉 http://localhost:5000

3️⃣ Frontend Setup
bash
Copy code
cd ../frontend
npm install
npm run dev
Frontend runs on:
👉 http://localhost:5173

🧩 Core AI Logic
The NLP Engine uses two classical AI/ML techniques:

TF–IDF (Term Frequency–Inverse Document Frequency)
Calculates the importance of each term in a document relative to the corpus.

Cosine Similarity
Measures how similar two text vectors are by comparing their angles in vector space.

Together, these algorithms allow SynapseAI to understand context and recommend the most relevant content.

🧑‍💻 Example Query
Input:

“Learn probability and statistics for machine learning”

AI Response:

Recommends top-ranked resources on probability, statistics, and ML fundamentals.

📊 Results
⚡ Response time: < 1 second

🎯 High accuracy with semantically relevant matches

📚 Easily scalable for multiple subjects and content types

🚀 Future Enhancements
🗣️ Add voice-based input using Speech Recognition API

🤖 Integrate LLM (e.g., OpenAI API) for deeper explanations

📈 Implement progress tracking & adaptive learning paths

🧩 Create admin panel for managing materials and users

🕹️ Add gamification features (badges, quizzes, streaks)

📚 Research Highlights
This project qualifies as an AI/ML research project because it:

Implements NLP algorithms (TF–IDF, Cosine Similarity)

Performs semantic understanding of user queries

Automates intelligent recommendations

Applies AI to education technology (AI in EdTech)

🧠 Keywords
Artificial Intelligence, Machine Learning, NLP, TF–IDF, Cosine Similarity, Intelligent Tutoring System, MERN Stack, Personalized Learning, Adaptive Education

👨‍💻 Contributors
Name	Role
Md Faishal Anis	Project Developer, Researcher

🪪 License
This project is open-source under the MIT License.
You’re free to use, modify, and distribute with attribution.

💬 Acknowledgments
Special thanks to open-source libraries and tools:

Natural.js

MongoDB Atlas

React

TailwindCSS

⭐ Show Your Support
If you find this project helpful, give it a ⭐ on GitHub!
Let’s make AI-powered education accessible to everyone 🌍

yaml
Copy code

---

### 💡 Tips
- Replace `your-username` in the clone URL with your actual GitHub username.  
- You can add screenshots later under a section like:  
  ```markdown
  ## 🖼️ Screenshots  
  ![Login Page](screenshots/login.png)  
  ![Dashboard](screenshots/register.png)
