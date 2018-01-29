import { expect } from "chai";

describe("Server", () => {
  let app;

  before(() => {
    // create a server
  });

  it("should start", () => {
    expect(app).to.not.be.false;
  });

  it("GET:/", done => {
    request(app)
      .get("/")
      .expect(200, { version }, done);
  });

  after(() => {
    // app.server.close();
  });
});
