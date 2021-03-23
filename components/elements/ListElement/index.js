import Advantage from "./Advantage";
import Article from "./Article";
import BanerSlide from "./BanerSlide";
import Default from "./Default";
import GalleryItem from "./GalleryItem";
import Manufacturer from "./Manufacturer";
import News from "./News";

export default {
	advantage: Advantage,
	article: Article,
	imperial: Default,
	baner: BanerSlide,
	manufacturer: Manufacturer,
	news: News,
	photo: GalleryItem,
	get(type) {
		return this[type] || this.imperial;
	},
};
