const serverUrl = "http://localhost:8080/api/v1";
const auth = "/auth";
const authEndpoint = serverUrl + auth;

export const endpoints = {
  login: authEndpoint + "/login",
  register: authEndpoint + "/register",
  verifyOtp: authEndpoint + "/verify-otp",
  activateUser: authEndpoint + "/activate-user",
};
