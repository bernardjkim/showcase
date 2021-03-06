/**
 * Parses the JSON returned by a network request
 *
 * @param  {Response} response A response from a network request
 *
 * @return {object}          The parsed JSON from the request
 */
function parseJSON(response: any) {
  if (response.status === 204 || response.status === 205) {
    return null;
  }
  return response.json();
}

/**
 * Checks if a network request came back fine, and throws an error if not
 *
 * @param  {Response} response   A response from a network request
 *
 * @return {Response|undefined} Returns either the response, or throws an error
 */
function checkStatus(response: any) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  const error = new Error(response.statusText);
  // TODO: Create new error type?
  // error.response = response;
  throw error;
}

/**
 * Requests a URL, returning a promise
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 *
 * @return {object}           The response data
 */
export default function request(url: string, options?: object) {
  return fetch(url, options)
    .then(checkStatus)
    .then(parseJSON);
}
