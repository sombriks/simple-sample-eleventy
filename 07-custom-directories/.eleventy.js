// simple eleventy directory override configuration
module.exports = function (eleventyConfig) {
  return {
    dir: {
      input: "src",
      output: "dist"
    }
  }
}