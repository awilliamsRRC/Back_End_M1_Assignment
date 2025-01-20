import request, { Response } from "supertest";
import app from "../../../src/app";  // Adjust path if necessary

describe("GET /api/v1/health", () => {
  it("should return server health status", async () => {
    const response: Response = await request(app).get("/api/v1/health");

    // Verifying the response status is 200 (OK)
    expect(response.status).toBe(200);

    // Verifying the response body contains status "OK"
    expect(response.body.status).toBe("OK");

    // Verifying the response body contains the 'uptime' property
    expect(response.body).toHaveProperty("uptime");

    // Verifying the response body contains the 'timestamp' property
    expect(response.body).toHaveProperty("timestamp");

    // Verifying the response body contains the 'version' property
    expect(response.body).toHaveProperty("version");
  });
});

describe("GET /api/v1/version", () => {
  it("should return API version", async () => {
    const response: Response = await request(app).get("/api/v1/version");

    // Verifying the response status is 200 (OK)
    expect(response.status).toBe(200);

    // Verifying the response body contains the 'version' property
    expect(response.body.version).toBe("1.0.0");

    // Verifying the response body contains a 'message' property
    expect(response.body.message).toBe("API Version");
  });
});
