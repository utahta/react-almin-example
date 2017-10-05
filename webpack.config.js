const path = require("path");
module.exports = {
    entry: "./src/index.tsx",

    devtool: process.env.WEBPACK_DEVTOOL || "source-map",

    output: {
        path: path.join(__dirname, "public", "build"),
        publicPath: "/build/",
        filename: "bundle.js"
    },

    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx"]
    },

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: "awesome-typescript-loader"
            }
        ]
    }
};
