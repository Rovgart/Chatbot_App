import clientPromise from "./mongoClient";

describe("MongoDB Connection", () => {
  it("should connect to MongoDB successfully", async () => {
    const client = await clientPromise;
    expect(client).toBeDefined(); // Ensure that a client object is returned

    const db = client.db("ChatbotUI"); // Use a test database name
    const admin = db.admin();

    // Check server status to confirm connection
    const status = await admin.serverStatus();
    expect(status).toBeDefined(); // Ensure the server status is returned
    expect(status.ok).toBe(1); // Ensure server status is OK
  });

  afterAll(async () => {
    const client = await clientPromise;
    await client.close(); // Close the connection after tests
  });
});
