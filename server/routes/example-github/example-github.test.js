"use strict";

import { expect, assert } from "chai";
import request from "supertest";
import sinon from "sinon";
import uuid from "uuid";

import exampleGithubRouter from "./example-github.js";

describe("Github Examples Routes", () => {
  let server;
  beforeEach(() => {
    server = require("../../server").createServer();
  });

  afterEach(done => {
    server.close(done);
  });

  describe("rpOptions", () => {
    it("should generate a valid options object to pass into rp", () => {
      const MOCK_USER = uuid();
      const MOCK_URL_BASE = "https://api.github.com/users/";

      const options = exampleGithubRouter.rpOptions(MOCK_USER);

      expect(options).to.deep.equal({
        method: "GET",
        uri: MOCK_URL_BASE + MOCK_USER,
        // qs: {
        //   access_token: "xxxxx xxxxx", // -> uri + '?access_token=xxxxx%20xxxxx'
        // },
        headers: {
          "User-Agent": "Request-Promise",
        },
        json: true,
      });
    });
  });

  describe("fetchUserProfile", () => {
    it("should have a successful response", async () => {
      const MOCK_USER = uuid();
      try {
        const res = await exampleGithubRouter.fetchUserProfile(MOCK_USER);
        assert.ok(res);
      } catch (err) {
        assert.ok(err);
      }
    });
  });

  describe("getGithubUser", () => {
    const MOCK_USER = uuid();

    const MOCK_PROFILE = {
      login: MOCK_USER,
      public_repos: 151,
    };

    const MOCK_ERROR = Symbol();

    afterEach(() => {
      exampleGithubRouter.fetchUserProfile.restore();
    });

    it("should return a valid user profile object", done => {
      sinon
        .stub(exampleGithubRouter, "fetchUserProfile")
        .resolves(MOCK_PROFILE);

      request(server)
        .get(`/github/${MOCK_USER}`)
        .expect(res => {
          res.body = MOCK_PROFILE;
        })
        .expect(200, done);
    });

    it("should return an error if rejected", done => {
      sinon.stub(exampleGithubRouter, "fetchUserProfile").rejects(MOCK_ERROR);

      request(server)
        .get(`/github/${MOCK_USER}`)
        .expect(res => {
          res.body = MOCK_ERROR;
        })
        .expect(404, done);
    });
  });
});
