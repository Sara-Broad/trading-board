import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.API_URL + "/users/";

export function getUsers() {
  return fetch(baseUrl)
    .then(handleResponse)
    .catch(handleError);
}

export function loadUsersSuccess(users) {
  return users
}
