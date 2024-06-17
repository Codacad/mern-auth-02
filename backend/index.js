import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { configDotenv } from "dotenv";
import userRoutes from "./routes/userRoutes.js";
import { dbConnection } from "./config/db.js";
configDotenv();
const PORT = process.env.PORT;
const app = express();
app.use(cookieParser());

(async function () {
  const response = await dbConnection(process.env.DB_URI);
  console.log(response);
})();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/users", userRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
