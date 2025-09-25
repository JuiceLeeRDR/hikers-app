import { BASE_URL } from "./constants";

function checkResponse(res) {
  return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
}

function request(url, options) {
  return fetch(url, options).then(checkResponse);
}

function getReviews() {
  return request(`${BASE_URL}/reviews`, {
    headers: {
      "Content-Type": "application/json",
    },
  });
}

function getImgs() {
  return request(`${BASE_URL}/social-feed`, {
    headers: {
      "Content-Type": "application/json",
    },
  });
}

function getTrails() {
  return request(`${BASE_URL}/trails`, {
    headers: {
      "Content-Type": "application/json",
    },
  });
}

function postNewReviews({ rating, difficulty, review }) {
  const requestData = { rating, difficulty, review };
  console.log("Request data being sent:", requestData);
  console.log("Token:", getToken());

  return request(`${BASE_URL}/reviews`, {
    method: "POST",

    headers: {
      authorization: `Bearer ${getToken()}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      rating,
      difficulty,
      review,
    }),
  });
}

function postNewImg({ name, imageUrl }) {
  const requestData = { name, imageUrl };
  console.log("Request data being sent:", requestData);
  console.log("Token:", getToken());

  return request(`${BASE_URL}/social-feed`, {
    method: "POST",

    headers: {
      authorization: `Bearer ${getToken()}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      imageUrl,
    }),
  });
}

function deleteImgs(_id) {
  return request(`${BASE_URL}/social-feed/${_id}`, {
    method: "DELETE",
    headers: {
      authorization: `Bearer ${getToken()}`,
    },
  });
}

function deleteReviews(_id) {
  return request(`${BASE_URL}/reviews/${_id}`, {
    method: "DELETE",
    headers: {
      authorization: `Bearer ${getToken()}`,
    },
  });
}

export {
  getImgs,
  getReviews,
  getTrails,
  deleteImgs,
  checkResponse,
  postNewImg,
  postNewReviews,
  deleteReviews,
};
