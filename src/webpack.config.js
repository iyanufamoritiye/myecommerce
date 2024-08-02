module.exports = {
  // Other configurations...
  module: {
    rules: [
      {
        test: /\.svg$/,
        use: ["@svgr/webpack"],
      },
    ],
  },
};
