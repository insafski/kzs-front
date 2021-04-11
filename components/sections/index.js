import About from "./About";
import Advantages from "./Advantages";
import Articles from "./Articles";
import Baner from "./Baner";
import Contacts from "./Contacts";
import ContentFlow from "./ContentFlow";
import Feedback from "./Feedback";
import GeoMap, { GeoMapWithContacts } from "./GeoMap";
import Manufacturers from "./Manufacturers";
import News from "./News";
import ImageGallery from "./ImageGallery";
import Products from "./Products";
import Text from "./Text";
import VideoGallery from "./VideoGallery";
import Inn from "./Inn";

export default {
	"about": About,
	"advantages": Advantages,
	"articles": Articles,
	"baner": Baner,
	"contacts": Contacts,
	"content-flow": ContentFlow,
	"feedback": Feedback,
	"manufacturers": Manufacturers,
	"map": GeoMap,
	"contacts-map": GeoMapWithContacts,
	"news": News,
	"image-gallery": ImageGallery,
	"products": Products,
	"text": Text,
	"video-gallery": VideoGallery,
	"imperial": "div",
	"inn": Inn,
	get(type) {
		return this[type] || this.imperial;
	},
};
