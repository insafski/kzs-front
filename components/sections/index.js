import About from "./About";
import Advantages from "./Advantages";
import Articles from "./Articles";
import Baner from "./Baner";

export default {
	about: About,
	advantages: Advantages,
	articles: Articles,
	baner: Baner,
	imperial: "div",
	get(type) {
		return this[type] || this.imperial;
	},
};
