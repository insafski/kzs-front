import Advantage from "./Advantage";
import Article from "./Article";
import BanerSlide from "./BanerSlide";
import Default from "./Default";
import Manufacturer from "./Manufacturer";
import Photo from "./Photo";

export default {
	advantage: Advantage,
	article: Article,
	imperial: Default,
	baner: BanerSlide,
	manufacturer: Manufacturer,
	photo: Photo,
	get(type) {
		return this[type] || this.imperial;
	},
};
