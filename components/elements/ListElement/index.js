import Advantage from "./Advantage";
import Article from "./Article";
import Default from "./Default";
import Manufacturer from "./Manufacturer";

export default {
	advantage: Advantage,
	article: Article,
	imperial: Default,
	manufacturer: Manufacturer,
	get(type) {
		return this[type] || this.imperial;
	},
};
