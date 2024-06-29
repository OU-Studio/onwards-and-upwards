// next.config.js

module.exports = {
  webpack: (config, { isServer }) => {
    // Find the existing SVG rule
    const fileLoaderRule = config.module.rules.find(
      (rule) => rule.test && rule.test.toString().includes("svg")
    );

    // Exclude SVGs from the default file-loader
    config.module.rules = config.module.rules.filter(
      (rule) => rule !== fileLoaderRule
    );

    // Add SVGR as a new rule for SVGs
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};