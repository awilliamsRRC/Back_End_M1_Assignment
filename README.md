# 2. Setting Up the Development Environment

**import express, { Express,Request,Respond } from "express";**

    This is an import statement in TypeScript. Inside the parenthesis is an destructuring import which imports specific exports from the express module.

**{Express}**

    This is the type definition for the express application object. It assigns a type to the **app** variable.

**const app: Express = express();**

    Here app is typed as an express aplication.

**// Define a route**
**app.get("/", (req:Request, res:Respond) => {**
    **res.send("Hello, World!");**
**});**

**Request:**This is the type for the request object (req) in route handlers. It's used to type the req parameter in your route handler functions. This way, TypeScript understands what properties and methods are available on req.In an Express route handler, the request object (req) represents the HTTP request made by the client.It is an object because it contains information about the request, such as:

    The HTTP method (GET, POST, etc.)
    The URL of the request
    The query parameters
    The body of the request (for POST, PUT, etc.)
    The headers

**Response:** This is the type for the response object (res) in route handlers. It's used to type the res parameter in your route handler functions. This way, TypeScript knows what methods you can call on res, such as .send() or .json(). The response object (res) represents the HTTP response that will be sent back to the client. It is also an object, and it contains methods for sending data back to the client, such as:

**.send():** To send a plain response.
**.json():** To send a JSON response.
**.status():** To set the HTTP status code of the response.

**Summary** 
    Express application object (app): An object that represents your web server and has methods for handling HTTP requests and defining routes.

    Request object (req): An object that represents the incoming HTTP request and contains information like URL, headers, body, and query parameters.

    Response object (res): An object that represents the outgoing HTTP response and provides methods for sending data back to the client.

    TypeScript type Express: A type definition that helps TypeScript know the structure of the app object.

**export default app;**

Allows user import and rename object.

**app.get**

This defines get routes on the server. It contains **callback: RequestHandler**. It defines the type for a function that handles  HTTp request and sends responses like .get, .post ,.put. **.get** is used to request data from a server.

# server.ts

**imports** 
app object from app.ts and server object from http.

**const PORT: string | number = process.env.PORT || 3000;**

Intitializes port as string or number and sets environment variable on PORT,if undefined then it will be 3000.

**const server: Server = app.listen(PORT, () => {**

It creates server object and list on PORT.

# 3. API Documentation with Swagger



