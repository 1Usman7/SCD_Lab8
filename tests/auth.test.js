const request = require("supertest");
const app = require("../server");

describe("User Authentication", () => {
  it("should register a new user", async () => {
    const res = await request(app).post("/api/auth/register").send({
      username: "testuser",
      email: "test@example.com",
      password: "password123",
    });
    expect(res.statusCode).toBe(201);
  });
});
