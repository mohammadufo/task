import axios from "axios";

const newRequest = axios.create({
  baseURL: "https://rickandmortyapi.com/api/character/",
  headers: {
    "Content-type": "application/json",
  },
});

export default newRequest;
