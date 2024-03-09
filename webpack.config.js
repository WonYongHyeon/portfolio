// path 모듈 불러오기
const path = require("path");

module.exports = {
  // entry 설정
  entry: "./src/index.tsx",
  // output 설정
  output: {
    // 최종 번들링된 자바스크립트
    filename: "main.js",
    // dist를 배포용 폴더로 사용
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|pages)/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
};
