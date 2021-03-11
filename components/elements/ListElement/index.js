import Advantage from "./Advantage";
import Article from "./Article";
import BanerSlide from "./BanerSlide";
import Default from "./Default";
import Manufacturer from "./Manufacturer";

export default {
	advantage: Advantage,
	article: Article,
	imperial: Default,
	baner: BanerSlide,
	manufacturer: Manufacturer,
	get(type) {
		return this[type] || this.imperial;
	},
};
