import express from "express";
import rp from "request-promise-native";

let router = express.Router();

const rpOptions = user => {
  return {
    method: "GET",
    uri: "https://api.github.com/users/" + user,
    // qs: {
    //   access_token: "xxxxx xxxxx", // -> uri + '?access_token=xxxxx%20xxxxx'
    // },
    headers: {
      "User-Agent": "Request-Promise",
    },
    json: true, // Automatically parses the JSON string in the response
  };
};

const getGithubUser = (req, res, next) => {
  const user = req.params.user;

  rp(rpOptions(user))
    .then(userProfile => {
      res.json({
        ok: true,
        msg: `User has ${userProfile.public_repos} repos`,
      });
      next();
    })
    .catch(err => {
      throw new Error(err); // API call failed...
    });
};

const exampleGithubRoutes = () => {
  /**
   * Get user profile from github and print the number of public repos.
   * @param user to be queried. This is a path parameter.
   */
  router.get("/:user", getGithubUser);

  return router;
};

module.exports = { rpOptions, getGithubUser, exampleGithubRoutes };
