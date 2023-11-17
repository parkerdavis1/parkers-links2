const EleventyFetch = require("@11ty/eleventy-fetch");

module.exports = async function() {
  let url = "https://birdsmakesound.com/feed/feed.json";

  /* This returns a promise */
  return EleventyFetch(url, {
    duration: "1d", // save for 1 day
    type: "json"    // we’ll parse JSON for you
  });
};

