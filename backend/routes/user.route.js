import express from "express";
import {
  login,
  logout,
  register,
  updateProfile,
} from "../controllers/user.controller.js";
import isAuthenticated from "../middlewares/isAuthenticated.js";
import { singleUpload } from "../middlewares/mutler.js";
import rateLimit from "express-rate-limit";

// Create a rate limiter for login attempts
const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 10, // Limit to 10 requests per IP
  message: "Too many login attempts. Please try again later.",
});

const router = express.Router();

router.route("/register").post(singleUpload, register);
router.route("/login").post(loginLimiter, login);
router.route("/logout").get(logout);
router
  .route("/profile/update")
  .post(isAuthenticated, singleUpload, updateProfile);

export default router;
