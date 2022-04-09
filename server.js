const dotenv = require("dotenv");
const express = require("express");
// const logger = require("./middleware/logger");
const morgan = require("morgan");
const connectDB = require("./config/db");

// Load env vars
dotenv.config({ path: "./config/config.env" });

// Route file
const bootcamps = require("./routes/bootcamps");

//Connect to Database
connectDB();

const app = express();

// Dev logging middleware
if (process.env.NODE_ENV === "development") {
  //   app.use(logger);
  app.use(morgan("dev"));
}

// Mount routers
app.use("/api/v1/bootcamps", bootcamps);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
