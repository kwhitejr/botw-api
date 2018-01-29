import { expect } from "chai";
import request from "supertest";

describe("Server", () => {
  let server;
  beforeEach(function() {
    server = require("./server");
  });
  afterEach(function() {
    server.close();
  });

  it("should start", () => {
    expect(server).to.not.be.false;
  });

  it("GET /", done => {
    request(server)
      .get("/")
      .expect(200, done);
  });
});
