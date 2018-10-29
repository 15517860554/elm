// 把入口文件配置出口文件

var path = require('path');

module.exports = {
  mode: 'development',
  entry: './main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'foo.bundle.js'
  },
  //配置加载器：对jsx语言转换
  module: {
	  rules: [
	    {
	      test: /\.js$/,//匹配以js结尾的文件
	      exclude: /(node_modules|bower_components)/,
	      use: {
	        loader: 'babel-loader',
	        query: {
	          presets: ['es2015','react']
	        }
	      }
	    },
	    {
	       test: /\.css$/,
	       use: [ 'style-loader', 'css-loader' ]
	    },
	    {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192
            }
          }
        ]
      }
	  ]
	},
	devServer: {
	  contentBase: path.join(__dirname, "dist"),
	  compress: true,
	  port: 9000,
	  inline:true//表示开启热更新
	}
};