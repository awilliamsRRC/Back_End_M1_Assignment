"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Import from express
const swagger_1 = __importDefault(require("../config/swagger"));
const express_1 = __importDefault(require("express"));
// Initialize Express application
const app = (0, express_1.default)();
(0, swagger_1.default)(app);
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
app.get("/", (req, res) => {
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
app.get("/api/v1/health", (req, res) => {
    res.json({
        status: "OK",
        uptime: process.uptime(),
        timestamp: new Date().toISOString(),
        version: "1.0.0",
    });
});
exports.default = app;
//# sourceMappingURL=app.js.map