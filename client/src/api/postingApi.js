import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.API_URL + "/postings/";

export function getPostings() {
  return fetch(baseUrl)
    .then(handleResponse)
    .catch(handleError);
}

export function savePosting(posting) {
  return fetch(baseUrl + (posting.id || ""), {
    method: posting.id ? "PUT" : "POST", // POST for create, PUT to update when id already exists.
    headers: { "content-type": "application/json" },
    body: JSON.stringify(user)
  })
    .then(handleResponse)
    .catch(handleError);
}

export function deletePosting(postId) {
  return fetch(baseUrl + postId, { method: "DELETE" })
    .then(handleResponse)
    .catch(handleError)
}