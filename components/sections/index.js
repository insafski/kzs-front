import About from "./About";
import Advantages from "./Advantages";
import Articles from "./Articles";
import Baner from "./Baner";
import Contacts from "./Contacts";
import Feedback from "./Feedback";
import GeoMap, { GeoMapWithContacts } from "./GeoMap";
import Manufacturers from "./Manufacturers";
import News from "./News";
import PhotoGallery from "./PhotoGallery";
import Products from "./Products";
import Text from "./Text";
import VideoGallery from "./VideoGallery";

export default {
	"about": About,
	"advantages": Advantages,
	"articles": Articles,
	"baner": Baner,
	"contacts": Contacts,
	"feedback": Feedback,
	"manufacturers": Manufacturers,
	"map": GeoMap,
	"contacts-map": GeoMapWithContacts,
	"news": News,
	"photo-gallery": PhotoGallery,
	"products": Products,
	"text": Text,
	"video-gallery": VideoGallery,
	"imperial": "div",
	get(type) {
		return this[type] || this.imperial;
	},
};
