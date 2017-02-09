module.exports = {
    entry: './app/app.jsx',
    output: {
        path: __dirname,
        filename: './public/bundle.js'
    },
    resolve: {
        root: __dirname,
        alias: {
            Main: 'app/component/Main.jsx',
            Nav: 'app/component/Nav.jsx',
            Weather: 'app/component/Weather.jsx',
            WeatherForm: 'app/component/WeatherForm.jsx',
            WeatherMessage: 'app/component/WeatherMessage.jsx',
            About: 'app/component/About.jsx',
            Examples: 'app/component/Examples.jsx',
            openWeatherMap: 'app/api/openWeatherMap.jsx'
        },
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                query: {
                    presets: [ 'react', 'es2015', 'stage-0']
                },
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/
            }
        ]
    }, 
    devtool:'inline-source-map'
};