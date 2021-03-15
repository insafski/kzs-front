import { useContext } from "react";
import AddressContext, { AddressConsumer } from "./context";
import AddressProvider from "./provider";

function useAddress() {
	return useContext(AddressContext);
}

export { AddressContext, AddressConsumer, AddressProvider, useAddress };
