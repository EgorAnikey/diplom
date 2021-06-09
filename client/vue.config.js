const path = require('path');

module.exports = {
  configureWebpack: {  
    resolve: {  

      alias: {  
          //aliases go here  
          // '@': path.resolve(__dirname)
      },  
    },
  },
  transpileDependencies: ["vuetify"]
}
