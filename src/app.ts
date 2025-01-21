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
 *     description: returns a "Hello,World!" message
 *     responses:
 *       200:
 *         description: Success
 */
// Define a route
app.get("/",(req:Request,res:Response) => {
    res.send("Hello, World!");

});

export default app;