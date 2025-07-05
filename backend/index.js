require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./controllers/authController");
const userRoutes = require("./routes/authRoutes");
const authRoutes = require("./middleware/auth");

// database connection
connection();

// middlewares
app.use(express.json());
app.use(cors());

// routes
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);

const port = process.env.PORT || 8080;
app.listen(port, console.log(`Listening on port ${port}...`));

const userCrudRoutes = require("./routes/userCrudRoutes");
app.use("/api/userscrud", userCrudRoutes); // avoid conflict with auth route

