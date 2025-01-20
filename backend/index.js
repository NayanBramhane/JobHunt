import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import connectDB from "./utils/db.js";
import userRoute from "./routes/user.route.js";
import companyRoute from "./routes/company.route.js";
import jobRoute from "./routes/job.route.js";
import applicationRoute from "./routes/application.route.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Validate required environment variables
const requiredEnvVars = [
  "FRONTEND_URI",
  "PORT",
  "MONGO_URI",
  "SECRET_KEY",
  "API_KEY",
  "API_SECRET",
];
requiredEnvVars.forEach((varName) => {
  if (!process.env[varName]) {
    console.error(`Environment variable ${varName} is missing.`);
    process.exit(1);
  }
});

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(
  helmet({
    contentSecurityPolicy: false, // Disable CSP if not needed
  })
);
app.disable("x-powered-by");

const corsOptions = {
  origin: process.env.FRONTEND_URI,
  credentials: true,
};
app.use(cors(corsOptions));

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per window
});
app.use(limiter);

// API Routes
app.use("/api/v1/user", userRoute);
app.use("/api/v1/company", companyRoute);
app.use("/api/v1/job", jobRoute);
app.use("/api/v1/application", applicationRoute);

// Global Error Handler
app.use((err, _req, res, _next) => {
  const statusCode = err.status || 500;
  res.status(statusCode).json({
    success: false,
    message: err.message || "Internal Server Error",
    ...(process.env.NODE_ENV !== "production" && { stack: err.stack }), // Include stack trace in non-production
  });
});

// Start Server
const startServer = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`Server running at port ${PORT}`);
      console.log(`Environment is ${process.env.NODE_ENV}`);
    });
  } catch (error) {
    console.error("Failed to start the server:", error);
    process.exit(1); // Exit the process with a failure code
  }
};

startServer();
