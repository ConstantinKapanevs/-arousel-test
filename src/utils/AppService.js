import axios from "axios";
axios.defaults.baseURL = "https://jsonplaceholder.typicode.com/";
const BaseURL = "https://jsonplaceholder.typicode.com/";
const myUrl = "https://gateway.scan-interfax.ru/";

async function getData() {
  return await axios({
    url: "users",
    method: "get",
  }).then((response) => response.data);
}

export { getData };
