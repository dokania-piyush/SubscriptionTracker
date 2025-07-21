<!DOCTYPE html>
<html lang="en">

<body class="bg-white text-gray-800">
       <div class="markdown-body">
        <h1>Production-Ready Subscription Management System API</h1>
        <p>This is a robust and scalable backend API for a Subscription Management System, built with Node.js, Express, and MongoDB. It handles user authentication with JWTs, manages subscription logic, and includes advanced features like automated renewal reminders using Upstash workflows and security enhancements with Arcjet.</p>
        <h2>Features</h2>
        <ul>
            <li><strong>JWT Authentication & User Management</strong>: Secure user registration, login, and profile management using JSON Web Tokens (JWT) and password hashing with bcrypt.</li>
            <li><strong>Advanced Subscription Management</strong>: Full CRUD (Create, Read, Update, Delete) operations for subscriptions with detailed database models and relationships using Mongoose.</li>
            <li><strong>Automated Email Reminders</strong>: Smart, automated email reminders for upcoming subscription renewals, powered by Upstash serverless workflows.</li>
            <li><strong>Advanced Security</strong>: Production-grade security provided by Arcjet, including advanced rate limiting, bot protection, and defense against common web vulnerabilities.</li>
            <li><strong>Global Error Handling</strong>: A centralized error handling mechanism and input validation middleware to ensure API stability and provide meaningful error messages.</li>
            <li><strong>Logging Mechanisms</strong>: Integrated logging for easier debugging, monitoring, and tracking application behavior in different environments.</li>
            <li><strong>Scalable Architecture</strong>: A clean, reusable, and scalable project structure with a clear separation of concerns (routes, controllers, models, middleware) for long-term maintainability.</li>
        </ul>
        <h2>Tech Stack</h2>
        <ul>
            <li><strong>Backend</strong>: Node.js, Express.js</li>
            <li><strong>Database</strong>: MongoDB with Mongoose</li>
            <li><strong>Authentication</strong>: JSON Web Token (JWT), bcrypt.js</li>
            <li><strong>Workflow Automation</strong>: Upstash</li>
            <li><strong>Security</strong>: Arcjet</li>
            <li><strong>Environment Variables</strong>: dotenv</li>
        </ul>
         <h2>Project Structure</h2>
        <pre><code>/
├── config/             # Database connections, environment config
├── controllers/        # Application logic
├── middleware/         # Custom middleware (auth, error handling)
├── models/             # Mongoose schemas and models
├── routes/             # API routes
├── utils/              # Utility functions
├── .env.example        # Example environment variables
├── app.js              # Express app entry point
└── package.json
</code></pre>
<h2>Getting Started</h2>
        <h3>Prerequisites</h3>
        <ul>
            <li>Node.js (v18 or higher)</li>
            <li>MongoDB instance (local or cloud-based like MongoDB Atlas)</li>
            <li>An Upstash account for Redis/QStash</li>
            <li>An Arcjet account</li>
        </ul>
<h3>Installation</h3>
        <ol class="list-decimal pl-5">
            <li><strong>Clone the repository:</strong>
                <pre><code>git clone &lt;repository-url&gt;
cd subscription-management-api</code></pre>
            </li>
            <li><strong>Install dependencies:</strong>
                <pre><code>npm install</code></pre>
            </li>
            <li><strong>Set up environment variables:</strong>
                <p>Create a <code>.env</code> file in the root directory and populate it using the <code>.env.example</code> file as a template.</p>
            </li>
           <pre><code># PORT
PORT=5500
SERVER_URL="http://localhost:5500"

# ENVIRONMENT
NODE_ENV=development

# DATABASE
DB_URI=

# JWT AUTH
JWT_SECRET=
JWT_EXPIRES_IN="1d"

# ARCJET
ARCJET_KEY=
ARCJET_ENV="development"

# UPSTASH
QSTASH_URL=http://127.0.0.1:8080
QSTASH_TOKEN=

# NODEMAILER
EMAIL_PASSWORD=
</code></pre>
            <li><strong>Run the server:</strong>
                <pre><code>npm start</code></pre>
            </li>
        </ol>
        <p>The API will be running on the port specified in your <code>.env</code> file.</p>
</div>

</body>
</html>
