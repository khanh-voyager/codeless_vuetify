export default function ({ $axios }) {
  // Set the API key for all requests
  const API_KEY = "q8tVejfAmR3M4TLL7nYOY47UZMlHuyHd2vf722E3";
  $axios.defaults.baseURL =
    "https://6tqz5vidvd.execute-api.ap-northeast-1.amazonaws.com";
  $axios.defaults.headers.post["X-Api-Key"] = API_KEY;
  $axios.defaults.headers.post["Content-Type"] = "application/json";
  $axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*";
  $axios.defaults.headers.common["Accept"] = "application/json";

  // Add request interceptor for debugging
  $axios.onRequest((config) => {
    console.log("Making request to:", config.url);
    console.log("With headers:", config.headers);
    return config;
  });

  // Add response interceptor
  $axios.onResponse((response) => {
    console.log("Received response from:", response.config.url);
    return response;
  });

  // Add error interceptor
  $axios.onError((error) => {
    console.error("Request error:", error);
    return Promise.reject(error);
  });
}
