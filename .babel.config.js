module.exports = {
  "presets": ["@babel/preset-env", "@babel/preset-typescript"],
  "plugins": [
    [
      "babel-plugin-styled-components",
      {
        "ssr": true,
        "displayName": true
      }
    ]
  ],
  "env": {
    "test": {
      "plugins": [
        [
          "babel-plugin-styled-components",
          {
            "ssr": false,
            "displayName": false
          }
        ]
      ]
    }
  }
}