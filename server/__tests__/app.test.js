import request from "supertest";
import app from "../app.js"; // Assuming app.js is in the same directory

describe("Express App", () => {
  it("should respond with status 200 for GET /", async () => {
    const response = await request(app).get("/");
    expect(response.statusCode).toBe(200);
  });

  it("should respond with status 200 for GET /users", async () => {
    const response = await request(app).get("/users");
    expect(response.statusCode).toBe(200);
  });
});
