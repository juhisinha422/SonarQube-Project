# 🚀 SonarQube Code Quality & CI/CD Project

A real-world **DevOps & Code Quality** project demonstrating how to build, test, analyze, containerize, and deploy a Spring Boot application using **Jenkins, SonarQube, Docker, and Maven**.

This project focuses on **practical learning**, **quality gates**, and **continuous improvement**, exactly how modern DevOps teams work.

---

## 🧠 What I Learned from This Project

- How **SonarQube** evaluates real production code
- Understanding **Bugs, Vulnerabilities, Code Smells, Coverage & Duplications**
- Why **Quality Gates fail** and how to improve them step-by-step
- Integrating **SonarQube with Jenkins CI pipelines**
- Writing and fixing **unit tests to improve coverage**
- Packaging applications using **Docker**
- Automating everything using **Jenkins Declarative Pipeline**

---

## 🛠 Tech Stack Used

- **Backend:** Spring Boot (Java 17)
- **Build Tool:** Maven
- **CI/CD:** Jenkins
- **Code Quality:** SonarQube
- **Containerization:** Docker
- **Web UI:** HTML, CSS (Neon Dark Theme), JavaScript
- **Version Control:** Git & GitHub

---

## 📦 Project Structure

SonarQube-Project-Kastro/
│
├── Dockerfile

├── Jenkinsfile

├── pom.xml

├── README.md
│
├── src/

│ ├── main/

│ │ ├── java/com/kastro/spotify

│ │ ├── resources/

│ │ │ ├── templates/index.html

│ │ │ └── static/

│ │ │ ├── css/style.css

│ │ │ └── js/app.js

│ └── test/

│ └── java/com/kastro/spotify
│
└── target/


---

## 🔄 CI/CD Pipeline Flow

1. **Git Checkout**
2. **Maven Compile**
3. **Unit Testing**
4. **SonarQube Code Analysis**
5. **Quality Gate Evaluation**
6. **Maven Package**
7. **Docker Image Build**
8. **Docker Push**
9. **Container Deployment**

All stages are automated using a **Jenkins Declarative Pipeline**.

---

## 📊 SonarQube Metrics Tracked

- 🐞 Bugs
- 🔐 Vulnerabilities
- 🧹 Code Smells
- 📊 Test Coverage
- 📁 Code Duplications
- 🚦 Quality Gate Status

> ⚠️ Quality Gate failures are intentionally kept during learning to understand **why projects fail and how to fix them**, which reflects real industry scenarios.

---

## 🐳 Docker Support

The application is containerized using Docker:

```bash
docker build -t juhisinha/spotify-app:latest .
docker run -d -p 5555:5555 spotify-app
```
## Project Screenshots

<img width="1918" height="866" alt="Image" src="https://github.com/user-attachments/assets/13a2fa19-d9e8-411f-a0bc-56c78c0fc8bd" />

<img width="1892" height="952" alt="Image" src="https://github.com/user-attachments/assets/5ac0e641-392f-42e9-afa6-cd52dca96d5c" />

<img width="1127" height="482" alt="Image" src="https://github.com/user-attachments/assets/abd48b81-095b-4560-b252-ec682193495f" />

<img width="1176" height="428" alt="Image" src="https://github.com/user-attachments/assets/75a9cc0a-be3a-47eb-bfa9-04fdd79ce3df" />

## 👩‍💻 Author

**Juhi Sinha**  
Aspiring **DevOps & Cloud Engineer**

Passionate about building reliable CI/CD pipelines, improving code quality with **SonarQube**, and automating deployments using **Jenkins, Docker, and AWS**.  
Focused on writing clean, maintainable code and continuously improving quality through real-world DevOps practices.
