import Advantage from "./Advantage";
import Article from "./Article";
import BanerSlide from "./BanerSlide";
import Default from "./Default";
import GalleryItem from "./GalleryItem";
import Manufacturer from "./Manufacturer";
import News from "./News";
import Product from "./Product";

export default {
	advantage: Advantage,
	article: Article,
	imperial: Default,
	baner: BanerSlide,
	manufacturer: Manufacturer,
	news: News,
	photo: GalleryItem,
	product: Product,
	get(type) {
		return this[type] || this.imperial;
	},
};
