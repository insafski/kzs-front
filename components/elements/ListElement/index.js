import Advantage from "./Advantage";
import Default from "./Default";

export default {
	advantage: Advantage,
	imperial: Default,
	get(type) {
		return this[type] || this.imperial;
	},
};
