import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";

// CONFIGURATIONS

dotenv.config();
const app = express();
app.use(helmet());
app.use(helmet.crossOriginEmbedderPolicy({ policy: "require-corp" })); // Update the policy here
app.use(morgan("common"));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

// MONGOOSE

console.log("HELLO WORLD");
