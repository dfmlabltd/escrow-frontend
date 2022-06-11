import "../styles/globals.css";
import "../styles/style.css";
import App from "next/app";
import React from "react";
import { Provider } from "mobx-react";
import { fetchInitialStoreState, ContractsStore } from "../store/DataStore";

class MyApp extends App {
	state = {
		dataStore: new ContractsStore(),
	};

	// Fetching serialized(JSON) store state
	static async getInitialProps(appContext: any) {
		const appProps = await App.getInitialProps(appContext);
		const initialStoreState = await fetchInitialStoreState();

		return {
			...appProps,
			initialStoreState,
		};
	}

	// Hydrate serialized state to store
	static getDerivedStateFromProps(props: any, state: any) {
		state.dataStore.hydrate(props.initialStoreState);
		return state;
	}

	render() {
		const { Component, pageProps } = this.props;
		return (
			<Provider contractStore={this.state.dataStore}>
				<Component {...pageProps} />
			</Provider>
		);
	}
}
export default MyApp;
