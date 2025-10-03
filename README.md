# Containerized Static Website with Nginx

This project demonstrates how to serve a static website using **Nginx** inside a **Docker container**.  
It’s a beginner-friendly project to understand Docker basics and containerized web hosting.

---

## 🚀 Features
- Simple static HTML website
- Served by Nginx web server
- Containerized using Docker
- Portable and lightweight

---

## 🛠️ Project Structure
.
├── Dockerfile
├── index.html
├── about.html
├── contact.html
├── styles.css
└── script.js

yaml
Copy code

---

## ⚡ Setup & Run

1. **Build the Docker image**
   ```bash
   docker build -t my-nginx .
Run the container

bash
Copy code
docker run -p 8080:80 my-nginx
Open your browser and go to:

arduino
Copy code
http://localhost:8080

📖 Learnings
Basics of Docker & containerization

Serving static files with Nginx

Writing Dockerfiles

Running containers locally

👨‍💻 Author
Dinesh Kumar Senthilkumar

📧 Email: dineshkumarsenthilk123@gmail.com

🌐 LinkedIn: linkedin.com/in/dineshkumar-senthilkumar

💻 GitHub: github.com/Dineshkumarsenthil
