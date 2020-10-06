export const BASE_URI =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000/"
    : "http://hiroyuki.space:3000/";
export const API_URL =
  process.env.NODE_ENV === "development"
    ? "localhost:3000"
    : "hiroyuki.space:3000";
