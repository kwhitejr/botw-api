import { expect } from "chai";
import request from "supertest";
import sinon from "sinon";
import uuid from "uuid";

import { rpOptions, getGithubUser } from "./example-github.js";

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

      const options = rpOptions(MOCK_USER);

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

  describe("getGithubUser", () => {
    it("should return a valid user profile object", () => {
      const MOCK_REQUEST = {
        params: {
          user: uuid(),
        },
      };

      const MOCK_RESPONSE = {
        ok: true,
        msg: `User has 151 repos`,
      };

      const MOCK_PROFILE = {
        login: MOCK_REQUEST.params.user,
        id: 13326538,
        url: `https://api.github.com/users/${MOCK_REQUEST.params.user}`,
        html_url: `https://github.com/${MOCK_REQUEST.params.user}`,
        public_repos: 151,
        public_gists: 7,
        followers: 11,
        following: 1,
      };

      getGithubUser(MOCK_REQUEST).then(res, () => {
        console.log(res);
      });
    });
  });

  // describe("GET github/:user", () => {
  //   it("should return a valid user from path paramater", () => {
  //     const MOCK_USER = uuid();

  //     const options = {
  //       uri: MOCK_USER,
  //       headers: {
  //         "User-Agent": "Request-Promise",
  //       },
  //       json: true,
  //     };

  //     const response = sinon.stub().resolves({
  // login: MOCK_USER,
  // id: 13326538,
  // url: `https://api.github.com/users/${MOCK_USER}`,
  // html_url: `https://github.com/${MOCK_USER}`,
  // public_repos: 151,
  // public_gists: 7,
  // followers: 11,
  // following: 1,
  //     });

  //     const call = new Promise.resolve(response);

  //     return request(server)
  //       .get(`/github/${MOCK_USER}`)
  //       .expect(200)
  //       .then(response => {
  //         expect(response).to.be.an("object");
  //         expect(response.login).to.deep.equal(MOCK_USER);
  //       })
  //       .catch(err => {
  //         console.log(err);
  //       });
  //   });
  // });
});
