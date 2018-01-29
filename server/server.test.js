import { expect } from "chai";
import request from "supertest";

describe("Server", () => {
  let server;
  beforeEach(() => {
    server = require("./server").createServer();
  });
  afterEach(done => {
    server.close(done);
  });

  it("should start", () => {
    expect(server).to.not.be.false;
  });

  it("should GET /", done => {
    request(server)
      .get("/")
      .expect(200, done);
  });

  it("should respond 404 for NOT FOUND", done => {
    request(server)
      .get("/nothing/here")
      .expect(404, done);
  });
});
