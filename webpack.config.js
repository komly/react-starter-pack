module.exports = {
    entry: "./assets/app.js",
    output: {
        path: __dirname,
        filename: "static/js/bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react'],
                },
            }
        ]
    }
};
