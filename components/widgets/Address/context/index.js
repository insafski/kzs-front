import { createContext } from "react";

export const AddressContext = createContext(
	{
		isOpen: false,
		toggle: () => Function,
		handelClose: () => Function,
		handleOpen: () => Function,
	},
);

AddressContext.displayName = "AddressContext";

export const AddressContextProvider = AddressContext.Provider;
export const AddressConsumer = AddressContext.Consumer;
export default AddressContext;
