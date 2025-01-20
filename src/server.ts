//Import app object 
import app from "./app"
// Import Server type from "http"
import {Server} from "http";

/* Creates constant type called PORT as either string or number.
Assign PORT as environment variable to could be set or if undefined port 3000*/
const PORT:string | number = process.env.PORT || 3000;

// The application will listen to server(PORT) and output if running.
const server : Server =app.listen(PORT,() => {
    console.log(`Server is running on port ${PORT}`)

});

export {server};
