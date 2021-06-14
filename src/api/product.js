import axios from "axios";

// const KEY = "AIzaSyAQcWDil-IfkPAI05sGpFIca1FJRUZI3YM";

export default axios.create({
  // baseURL: "https://jsonplaceholder.typicode.com",
  baseURL: "http://localhost:8080",
  // params: {
  //     part: "snippet",
  //     maxResults: 5,
  //     type: 'video',
  //     key: KEY
  //   }
});
