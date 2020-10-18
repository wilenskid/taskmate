const path = require("path");

const config = {
    entry: {
        projects: "./src/app/projects/projects.tsx",
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name]/[name].bundle.js",
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: "babel-loader",
                exclude: /node_modules/,
            },
            {
                test: /\.ts(x)?$/,
                loader: "ts-loader",
                exclude: /node_modules/,
            },
            {
                test: /\.scss$/,
                use: ["style-loader", "css-loader", "sass-loader"],
            },
        ],
    },
    resolve: {
        extensions: [".js", ".jsx", ".tsx", ".ts"],
        alias: {
            "react-dom": "@hot-loader/react-dom",
        },
    },
    optimization: {
        runtimeChunk: "single",
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: "vendors",
                    chunks: "all",
                },
            },
        },
    },
};

module.exports = (_, argv) => {
    if (argv.hot) {
        config.output.filename = "[name]/[name].hotbundle.js";
    }

    return config;
};
