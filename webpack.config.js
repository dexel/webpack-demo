const path = require('path') // node 기본 모듈(따로 설치 필요 X)
const HtmlWebpackPlugin = require('html-webpack-plugin')

//3요소 : 엔트리,아웃풋, 모듈
module.exports = {
  entry: './src/index.js',
  output: {
    filename: "main.js",
    path:path.resolve(__dirname,'dist')
  },
  module: {
    rules: [
      {
        test:/\.css$/, //predicate 해서 true가 나오면 아래 use 실행
        use:["style-loader","css-loader"]
      },
      {
        test:/\.scss$/,
        use:["style-loader","css-loader","sass-loader"] //순서는 뒤에서부터
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin()
  ]
}
