export const BASE_URI =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000/"
    : "http://49.12.11.0:3000/";
export const API_URL =
  process.env.NODE_ENV === "development"
    ? "localhost:3000"
    : "49.12.11.0:3000";
