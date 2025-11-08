import axios from 'axios';
export const SWAPI_BASE = 'https://swapi.dev/api';

export async function fetchPeoplePage(url = `${SWAPI_BASE}/people/`){
  const res = await axios.get(url);
  return res.data;
}

export async function fetchResource(url){
  const res = await axios.get(url);
  return res.data;
}
