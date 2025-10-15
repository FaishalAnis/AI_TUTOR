🤖 SynapseAI – AI-Powered Intelligent Learning Tutor

SynapseAI is a full-stack AI-powered tutoring platform that uses Natural Language Processing (NLP) to understand learners’ queries and recommend the most relevant study materials.
It’s built with the MERN stack (MongoDB, Express, React, Node.js) and integrates TF–IDF and Cosine Similarity algorithms to deliver personalized learning experiences.

🌟 Features

✅ AI/NLP Recommendation System – Learners can enter any topic (e.g., “Learn probability and statistics for ML”), and the system suggests the best educational resources.
✅ User Authentication (JWT) – Secure login and registration using encrypted JWT tokens.
✅ Dynamic Dashboard – Personalized user dashboard with quick access to learning tools.
✅ Search Interface – Real-time query interface for AI-driven topic recommendations.
✅ Responsive UI – Clean, modern frontend built with React + Tailwind CSS.
✅ MongoDB Atlas Integration – Cloud-hosted database for users and study materials.

🧠 Tech Stack
Layer	Technology Used
Frontend	React, Tailwind CSS, Axios, React Router DOM
Backend	Node.js, Express.js
Database	MongoDB Atlas
AI/NLP Engine	Natural (TF–IDF + Cosine Similarity)
Authentication	JSON Web Token (JWT)
Deployment	(optional) Vercel / Render / Railway
📁 Project Structure
AI_TUTOR/
│
├── backend/
│   ├── server.js
│   ├── routes/
│   ├── models/
│   ├── controllers/
│   ├── middleware/
│   ├── seed/materialSeed.js
│   └── .env
│
├── frontend/
│   ├── src/
│   │   ├── pages/
│   │   │   ├── Login.jsx
│   │   │   ├── Register.jsx
│   │   │   ├── Dashboard.jsx
│   │   │   └── Search.jsx
│   │   ├── components/
│   │   │   └── Navbar.jsx
│   │   ├── api.js
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── tailwind.config.js
│
└── README.md

⚙️ Installation & Setup
1️⃣ Clone the Repository
git clone https://github.com/your-username/synapseAI.git
cd synapseAI

2️⃣ Backend Setup
cd backend
npm install


Create a .env file inside the backend folder and add:

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key


Then seed the database (sample materials):

node seed/materialSeed.js


Run the backend server:

npm run dev


Server runs on:
👉 http://localhost:5000

3️⃣ Frontend Setup
cd ../frontend
npm install
npm run dev


Frontend runs on:
👉 http://localhost:5173

🧩 Core AI Logic

The NLP Engine uses two classical AI/ML techniques:

TF–IDF (Term Frequency–Inverse Document Frequency):
Weighs the importance of words across documents.

Cosine Similarity:
Computes the semantic similarity between user queries and available learning materials.

Together, these algorithms allow SynapseAI to understand context and recommend the most relevant content.

🧑‍💻 Example Query

Input:

“Learn probability and statistics for machine learning”

AI Response:

Recommends top-ranked resources on probability, statistics, and ML fundamentals.

📊 Results

Response accuracy improves with a larger and cleaner dataset.

Users receive contextually relevant material suggestions within milliseconds.

The system can easily scale to handle multiple users and content categories.

🚀 Future Enhancements

✨ Add voice-based input using Speech Recognition API
✨ Integrate LLM (e.g., OpenAI API) for detailed explanations
✨ Implement progress tracking & adaptive learning paths
✨ Create admin panel for managing materials and users
✨ Add gamification features (badges, quizzes, streaks)

📚 Research Highlights

This project qualifies as an AI/ML research project because it:

Implements NLP algorithms (TF–IDF, Cosine Similarity)

Performs semantic analysis of user queries

Automates intelligent recommendations

Applies AI to education technology (AI in EdTech)

🧠 Keywords

Artificial Intelligence, Machine Learning, NLP, TF–IDF, Cosine Similarity, Intelligent Tutoring System, MERN Stack, Personalized Learning, Adaptive Education

🧑‍🎓 Contributors
Name	Role
Md Faishal Anis	Project Developer, Researcher
Team Members Harshita  Dujari, Puja Mishra, Arijit Mallick, Kunal Singh
🪪 License

This project is open-source under the MIT License.
You’re free to use, modify, and distribute with attribution.

💬 Acknowledgments

Special thanks to open-source libraries:

Natural.js

MongoDB Atlas

React

TailwindCSS

⭐ Show your support

If you find this project helpful, give it a ⭐ on GitHub!
Let’s make AI-powered education accessible to everyone. 🌍
