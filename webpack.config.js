//экспорт настроек

const path = require('path')
module.exports={
    //вход
    entry : {
        app: './src/index.js'
    },
    output : {
        //если несколько входных точек [name] ,будет app
        filename: '[name].js',
        //поиск пути выхода всегда из корня, по этому path
        path: path.resolve(__dirname, './dist'),
        //для dev server
        publicPath: '/dist'
    },
    //правила для файлов 
    module:{
        //массив
        rules:[{
            //какие файлы
            test: /\.js$/, //все js файлы
            loader: 'babel-loader',
            exclude: '/node_modules/'
        }]
    },
    devServer:{
        overlay: true
    }
}