export default function ({ $axios, redirect, $config }) {
  $axios.onRequest((config) => {
    config.headers.common["X-Api-Key"] = $config.apiKey;
    config.headers.common["Content-Type"] = "application/json";
    return config;
  });
}
