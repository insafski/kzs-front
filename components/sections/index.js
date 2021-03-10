import About from "./About";
import Advantages from "./Advantages";
import Articles from "./Articles";
import Baner from "./Baner";
import Contacts from "./Contacts";
import Feedback from "./Feedback";
import Manufacturers from "./Manufacturers";
import Products from "./Products";
import Text from "./Text";

export default {
	about: About,
	advantages: Advantages,
	articles: Articles,
	baner: Baner,
	contacts: Contacts,
	feedback: Feedback,
	manufacturers: Manufacturers,
	products: Products,
	text: Text,
	imperial: "div",
	get(type) {
		return this[type] || this.imperial;
	},
};
