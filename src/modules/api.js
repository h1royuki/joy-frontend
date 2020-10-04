const axios = require("axios");
import { BASE_URI } from "../env";

export default axios.create({
  baseURL: BASE_URI
});
