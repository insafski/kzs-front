import Advantage from "./Advantage";
import Article from "./Article";
import News from "./News";
import BanerSlide from "./BanerSlide";
import Default from "./Default";
import Manufacturer from "./Manufacturer";
import GalleryItem from "./GalleryItem";

export default {
	advantage: Advantage,
	article: Article,
	news: News,
	imperial: Default,
	baner: BanerSlide,
	manufacturer: Manufacturer,
	photo: GalleryItem,
	get(type) {
		return this[type] || this.imperial;
	},
};
