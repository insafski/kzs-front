const path = require("path");

module.exports = {
	future: {
		webpack5: true,
	},
	sassOptions: {
		includePaths: [path.join(__dirname, "styles")],
	},
	webpack(config) {
		config.module.rules.push({
			test: /\.(graphql|gql)$/,
			exclude: /node_modules/,
			use: [
				{
					loader: "graphql-tag/loader",
				},
			],
		});

		return config;
	},
};
