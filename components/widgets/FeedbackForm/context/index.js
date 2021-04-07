import { createContext, useContext } from "react";

export const FeedbackContext = createContext(
	{
		isOpen: false,
		catalog: [],
		toggle: () => Function,
		handelClose: () => Function,
		handleOpen: () => Function,
	},
);

FeedbackContext.displayName = "FeedbackContext";

export function useFeedback() {
	return useContext(FeedbackContext);
}
export const FeedbackContextProvider = FeedbackContext.Provider;
export const FeedbackConsumer = FeedbackContext.Consumer;
export default FeedbackContext;
