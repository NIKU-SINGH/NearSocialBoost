import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import App from "./App";
import "./index.css";
import { createEmotionCache, MantineProvider } from "@mantine/core";
import { NotificationsProvider } from "@mantine/notifications";
import { StateProvider } from "./context";
import { wagmiClient } from "./utils/wagmi_client";
import { WagmiConfig } from "wagmi";
import { AuroraTestnet} from "@thirdweb-dev/chains";
import { GeistProvider, CssBaseline, Themes} from "@geist-ui/core";

const root = ReactDOM.createRoot(document.getElementById("root") as Element);

const myCache = createEmotionCache({
  key: "mantine",
  prepend: false,
});

const apiKey = process.env.REACT_APP_LIVEPEER_API_KEY || "";
// console.log({ apiKey });

const myTheme1 = Themes.createFromDark({
  type: 'coolTheme',
  palette: {
    success: '#000',
  },
})

root.render(
  <ThirdwebProvider activeChain={AuroraTestnet}>
    <WagmiConfig client={wagmiClient}>
      <MantineProvider
        emotionCache={myCache}
        withGlobalStyles
        theme={{
          colorScheme: "dark",
          primaryColor: "blue",
          defaultGradient: {
            from: "blue",
            to: "green",
            deg: 10,
          },
        }}
      >
        <NotificationsProvider position="top-right">
          <Router>
            <StateProvider>
              <GeistProvider themes={[myTheme1]} themeType="coolTheme">
                <CssBaseline />
                <App />
              </GeistProvider>
            </StateProvider>
          </Router>
        </NotificationsProvider>
      </MantineProvider>
    </WagmiConfig>
  </ThirdwebProvider>
);
