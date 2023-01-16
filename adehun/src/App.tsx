import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { configureChains, createClient, WagmiConfig } from "wagmi";
import { publicProvider } from "wagmi/providers/public";
import { Provider } from "react-redux";
import store from "./redux/store";
import { mainnet, optimism } from "wagmi/chains";

import PageRoutes from "./routes";

const { chains, provider } = configureChains(
  [mainnet, optimism],
  [publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: "Adehun App",
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

const App = () => {
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains}>
        <Provider store={store}>
          <PageRoutes />
        </Provider>
      </RainbowKitProvider>
    </WagmiConfig>
  );
};

export default App;
