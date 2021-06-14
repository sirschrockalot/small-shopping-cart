import axios from "axios";

// const KEY = "AIzaSyAQcWDil-IfkPAI05sGpFIca1FJRUZI3YM";

export default axios.create({
  baseURL: "https://item-create-app.herokuapp.com",
  // baseURL: "http://localhost:8080",
  // params: {
  //     part: "snippet",
  //     maxResults: 5,
  //     type: 'video',
  //     key: KEY
  //   }
});
