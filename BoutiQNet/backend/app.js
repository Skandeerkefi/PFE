const express = require("express");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const cors = require("cors");
const ErrorHandler = require("./middleware/error");

const app = express();

// Configuration
if (process.env.NODE_ENV !== "PRODUCTION") {
	require("dotenv").config({
		path: "config/.env",
	});
}

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(
	cors({
		origin: true,
		credentials: true,
	})
);
app.use(express.static("uploads"));
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));

// Routes
const userRoutes = require("./controller/user");
app.use("/api/v2/user", userRoutes);

// Error handling middleware
app.use(ErrorHandler);

module.exports = app;
