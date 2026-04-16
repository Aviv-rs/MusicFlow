export default {
  locales: ["en", "he"],
  extract: {
    input: "src/**/*.{js,jsx,ts,tsx}",
    output: "locales/{{language}}.json",
  },
};
