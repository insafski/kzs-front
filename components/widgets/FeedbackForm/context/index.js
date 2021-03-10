import { createContext } from "react";

export const FeedbackContext = createContext(
	{
		isOpen: false,
		toggle: () => Function,
		handelClose: () => Function,
		handleOpen: () => Function,
	},
);

FeedbackContext.displayName = "FeedbackContext";

export const FeedbackContextProvider = FeedbackContext.Provider;
export const FeedbackConsumer = FeedbackContext.Consumer;
export default FeedbackContext;
