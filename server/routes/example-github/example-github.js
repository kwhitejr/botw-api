import express from "express";
import rp from "request-promise-native";

let router = express.Router();

/** Simple external GET example with request-promise **/
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

const fetchUserProfile = username => {
  return rp(rpOptions(username));
};

const getGithubUser = (req, res, next) => {
  fetchUserProfile(req.params.user)
    .then(userProfile => {
      res.status(200).json(userProfile);
      next();
    })
    .catch(err => {
      throw new Error(err); // API call failed...
    });
};

/** Supply GET logic to Express router **/
const exampleGithubRoutes = () => {
  /**
   * Get user profile from github and print the number of public repos.
   * @param user to be queried. This is a path parameter.
   */
  router.get("/:user", getGithubUser);

  return router;
};

module.exports = { rpOptions, fetchUserProfile, exampleGithubRoutes };
