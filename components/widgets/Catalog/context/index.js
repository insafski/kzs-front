import { createContext, useContext } from "react";

export const CatalogContext = createContext(
	{
		isOpen: false,
		toggle: () => Function,
		handelClose: () => Function,
		handleOpen: () => Function,
	},
);

CatalogContext.displayName = "CatalogContext";

export function useCatalog() {
	return useContext(CatalogContext);
}
export const CatalogContextProvider = CatalogContext.Provider;
export const CatalogConsumer = CatalogContext.Consumer;
export default CatalogContext;
