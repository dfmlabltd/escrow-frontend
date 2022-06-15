import "../styles/globals.css";
import "../styles/style.css";
import App from "next/app";
import React, { createContext, useContext } from "react";
import { Provider } from "mobx-react";
import { ContractsArchive } from "../store/store-achieve";
import { IStore } from "../store/store-interface";

export const MobxContext = createContext<IStore>({} as IStore);
export const useStoreContext = () => useContext(MobxContext);

const MyApp = (props: any) => {
	const { Component, pageProps, err } = props;
	// const store = useStore(pageProps.initialState);
	return (
		<MobxContext.Provider value={ContractsArchive}>
			<Component {...pageProps} err={err} />
		</MobxContext.Provider>
	);
};

export default MyApp;
