export default function ({ $axios, redirect, $config }) {
  $axios.onRequest((config) => {
    config.headers.common["X-Api-Key"] = $config.apiKey;
    config.headers.common["Content-Type"] = "application/json";
    return config;
  });

  $axios.onError((error) => {
    const code = parseInt(error.response && error.response.status);
    if (code === 400) {
      console.error("Bad request");
    } else if (code === 401) {
      console.error("Unauthorized");
    } else if (code === 404) {
      console.error("API not found");
    } else if (code === 500) {
      console.error("Server error");
    }
    return Promise.reject(error);
  });
}
