const axios = require("axios");
import { BASE_URI } from "../env";

console.log(BASE_URI);
export default axios.create({
  baseURL: BASE_URI
});
