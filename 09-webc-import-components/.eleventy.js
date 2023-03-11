// configuring a template language plugin
const pluginWebc = require("@11ty/eleventy-plugin-webc");
const {EleventyRenderPlugin} = require("@11ty/eleventy");


module.exports = function (eleventyConfig) {

    // makes eleventy ignore src/_components AND provide auto-import
    eleventyConfig.addPlugin(pluginWebc, {
        components: "src/_components/**/*.webc"
    });

    // allow eleventy to render different templates in the same file
    eleventyConfig.addPlugin(EleventyRenderPlugin);

    return {
        dir: {
            input: "src",
            output: "dist"
        }
    }
}