import React from "react";

import { CatalogContextProvider } from "../context";

export default function CatalogProvider({ catalog, children }) {
	return (
		<CatalogContextProvider
			value={{
				catalog,
			}}
		>
			{children}
		</CatalogContextProvider>
	);
}
