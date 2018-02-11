import express from "express";
import rp from "request-promise-native";

let router = express.Router();

const exampleGithubRouter = {
  /** Simple external GET example with request-promise **/
  rpOptions: user => {
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
  },

  fetchUserProfile: username => {
    return rp(exampleGithubRouter.rpOptions(username));
  },

  getGithubUser: (req, res) => {
    exampleGithubRouter
      .fetchUserProfile(req.params.user)
      .then(userProfile => {
        res.status(200).json(userProfile);
      })
      .catch(err => {
        // throw new Error(err); // API call failed...
        res.status(404).json(err);
      });
  },

  /** Supply GET logic to Express router **/
  exampleGithubRoutes: () => {
    /**
     * Get user profile from github and print the number of public repos.
     * @param user to be queried. This is a path parameter.
     */
    router.get("/:user", exampleGithubRouter.getGithubUser);

    return router;
  },
};

export default exampleGithubRouter;
