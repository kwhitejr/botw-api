import { expect } from "chai";
import request from "supertest";

describe("Examples Routes", () => {
  let server;
  beforeEach(() => {
    server = require("../../server").createServer();
  });
  afterEach(done => {
    server.close(done);
  });

  describe("GET:/example", () => {
    it("200", done => {
      request(server)
        .get("/example")
        .expect(200, done);
    });
  });

  describe("POST:/example", () => {
    it("200", done => {
      request(server)
        .post("/example")
        .expect(200, done);
    });
  });
});
