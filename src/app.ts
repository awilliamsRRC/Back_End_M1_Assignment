// Import from express
import setupSwagger from "../config/swagger";
import express, {Express,Request,Response} from "express";
// Initialize Express application
const app: Express = express();

setupSwagger(app);

/**
 * @openapi
 * /:
 *   get:
 *     description: returns a "Hello, World!" message
 *     responses:
 *       200:
 *         description: Success
 */
// Define a route
app.get("/",(req:Request,res:Response) => {
    res.send("Hello, World!");

});


// Docs for health check
/**
 * @openai
 * /api/v1/health
 *   get:
 *     summary: get health status of the application
 *  tags: [Health]
 *  responses: 
 *    200:
 *      description: application: status,uptime,version and version
 */

// Creation of the Health Check.

app.get("/api/v1/health", (req,res) => {
    res.json({
        status: "OK",
        uptime: process.uptime(),
        timestamp: new Date().toISOString(),
        version: "1.0.0",
    
    });
});
 

export default app;