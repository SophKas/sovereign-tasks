import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default () => {
  const router = express.Router();

  // Main view
  router.get(["/", "/index", "/home"], (req, res) => {
    return res.render("tasks/index");
  });

  return router;
};
