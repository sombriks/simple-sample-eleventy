// configuring a template language plugin
const pluginWebc = require("@11ty/eleventy-plugin-webc");

module.exports = function (eleventyConfig) {

  eleventyConfig.addPlugin(pluginWebc);

  return {
    dir: {
      input: "src",
      output: "dist"
    }
  }
}