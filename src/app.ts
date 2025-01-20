import express, { Express } from "express";
import setupSwagger from "../config/swagger";

// Initialize Express application
const app: Express = express();

// Set up Swagger documentation
setupSwagger(app);

/**
 * @openapi
 * /:
 *   get:
 *     summary: Returns a Hello World message
 *     responses:
 *       200:
 *         description: A Hello World message
 */
app.get("/", (req, res) => {
    res.send("Hello, World!"); 
});

/**
 * @openapi
 * /tasks:
 *   get:
 *     summary: Retrieve a list of tasks
 *     tags: [Tasks]
 *     responses:
 *       200:
 *         description: A list of tasks
 */
app.get("/tasks", (req, res) => {
    res.send("Retrieve tasks"); // Simple response for /tasks route
});

export default app;
