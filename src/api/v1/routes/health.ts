import { Router, Request, Response } from "express";

const router: Router = Router();

// Health Check Endpoint
router.get("/health", (req: Request, res: Response) => {
  res.json({
    status: "OK",
    uptime: process.uptime(),  // Server uptime in seconds
    timestamp: new Date().toISOString(),  // Current timestamp in ISO format
    version: "1.0.0",  // API version
  });
});

// API Version Endpoint
router.get("/version", (req: Request, res: Response) => {
  res.json({
    version: "1.0.0",
    message: "API Version"
  });
});

export default router;
