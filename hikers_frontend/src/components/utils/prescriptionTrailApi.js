import { checkResponse } from "./api";

// Get single trail by ID
export const getTrailById = (id) => {
  return fetch(`api/trail/${id}`).then(checkResponse);
};

// Get trails by zip code
export const getTrailsByZip = (zip, offset = 0, count = 10) => {
  return fetch(
    `api/filter/?zip=${zip}&by=zip&offset=${offset}&count=${count}`
  ).then(checkResponse);
};

//Get trails by name
export const getTrailsByName = (name, offset = 0, count = 10) => {
  return fetch(
    `api/filter/?name=${name}&by=name&offset=${offset}&count=${count}`
  ).then(checkResponse);
};

//Get trails by city
export const getTrailsByCity = (city, offset = 0, count = 10) => {
  return fetch(
    `api/filter/?by=city&city=${city}&offset=${offset}&count=${count}`
  ).then(checkResponse);
};
