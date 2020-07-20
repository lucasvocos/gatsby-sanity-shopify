const babelOptions = {
  presets: [
    "babel-preset-gatsby",
    "@babel/env",
    "@babel/react",
    "@babel/preset-typescript",
  ],
}

module.exports = require("babel-jest").createTransformer(babelOptions)
