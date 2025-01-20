// Import from express
import express, {Express,Request,Response} from "express";
// Initialize Express application
const app: Express = express();
// Define a route
app.get("/",(req:Request,res:Response) => {
    res.send("Hello, World!");

});

export default app;