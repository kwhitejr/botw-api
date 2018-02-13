import rp from "request-promise-native";
import queryString from "query-string";

const API_URL = `http://localhost:3001`;

/**
 *
 * @param {string} method the request type
 * @param {string} relative the relative path to hit
 * @param {boolean} parseJson whether to automatically parse the JSON string in the resposne
 */
export const apiRequest = (method, relative, parseJson = true, data) => {
  const body = typeof data === "object" ? JSON.stringify(data) : data;

  const rpOptions = {
    method: method,
    uri: `${API_URL}/${relative}`,
    // qs: {
    //   access_token: "xxxxx xxxxx", // -> uri + '?access_token=xxxxx%20xxxxx'
    // },
    headers: {
      "User-Agent": "Request-Promise",
    },
    json: parseJson, // Automatically parses the JSON string in the response
    body: body,
  };

  return rp(rpOptions);
};
// .then(handleResponseAuth)

export const apiGet = (path, parseJson, params) => {
  let relative = path;
  if (params) {
    relative += `?${queryString.stringify(params)}`;
  }

  return apiRequest("GET", relative, parseJson);
};

export const apiPost = (path, parseJson) => apiRequest("POST", path, parseJson);
export const apiPut = (path, parseJson) => apiRequest("PUT", path, parseJson);
export const apiDelete = path => apiRequest("DELETE", path);
