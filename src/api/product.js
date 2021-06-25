import axios from "axios";

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
