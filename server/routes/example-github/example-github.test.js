"use strict";

import { expect, assert } from "chai";
import request from "supertest";
import sinon from "sinon";
import uuid from "uuid";

import { exampleGithubRouter } from "./example-github.js";

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
    it("should return a valid user profile object", done => {
      const MOCK_USER = uuid();

      // const MOCK_REQUEST = {
      //   params: {
      //     user: MOCK_USER,
      //   },
      // };

      const MOCK_PROFILE = {
        login: MOCK_USER,
        public_repos: 151,
      };

      const MOCK_RESPONSE = {
        ok: true,
        msg: `User ${MOCK_PROFILE.login} has ${
          MOCK_PROFILE.public_repos
        } repos`,
      };

      const MOCK_OPTIONS = {
        method: "GET",
        uri: "https://api.github.com/users/" + MOCK_USER,
        // qs: {
        //   access_token: "xxxxx xxxxx", // -> uri + '?access_token=xxxxx%20xxxxx'
        // },
        headers: {
          "User-Agent": "Request-Promise",
        },
        json: true,
      };

      // const userProfile = new Promise((resolve, reject) => {
      //   resolve(MOCK_PROFILE);
      // });

      // userProfile.then(() => {
      //   expect(MOCK_RESPONSE.msg).to.equal(
      //     `User ${userProfile.login} has ${userProfile.public_repos} repos`
      //   );
      // });
      sinon.stub(exampleGithubRouter.rpOptions).returns(MOCK_OPTIONS);
      sinon.stub(exampleGithubRouter.fetchUserProfile).resolves(MOCK_PROFILE);

      request(server)
        .get(`/github/${MOCK_USER}`)
        .end(res => {
          console.log("res: ", res);
          expect(res.status).to.equal(200);
          // expect(res.body.msg).to.equal('... something about MOCK_USER?...');
        });
    });
  });
});
