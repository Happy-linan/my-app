module.exports = {
  devServer: {
    // port: 9090,
    // open: true,
    // host: 'localhost'
  },
  css: {
    loaderOptions: {
      css: {
        // 这里的选项会传递给 css-loader
      },
      postcss: {
        // 这里的选项会传递给 postcss-loader
        postcssOptions: {
          plugins: [
            require('postcss-pxtorem')({
              rootValue: 36
            })
          ]
        }
      }
    }
  },
  lintOnSave: false
}

// module.exports = {
//   css: {
//     loaderOptions: {
//       css: {},
//       postcss: {
//         plugins: [
//           require('postcss-px2rem')({
//             remUnit: 37.5
//           })
//         ]
//       }
//     }
//   }
// }
