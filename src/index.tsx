import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-multi-carousel/lib/styles.css";
import "primereact/resources/themes/lara-light-blue/theme.css";
import { MantineProvider, createTheme } from "@mantine/core";
import "@mantine/core/styles.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import { CountProvider } from "./components/context/count";
import { CartProvider } from "./components/context/cart";
import { StyledEngineProvider } from "@mui/material";
import "react-toastify/dist/ReactToastify.css";
import { WishProvider } from "./components/context/wishlist";
import { CompareProvider } from "./components/context/compare";
const theme = createTheme({
  // You can customize your theme here
});
const rootElement = document.getElementById("root");
if (rootElement) {
  createRoot(rootElement).render(
    <BrowserRouter>
      <CountProvider>
        <CartProvider>
          <StyledEngineProvider injectFirst>
            <MantineProvider theme={theme}>
              <WishProvider>
                <CompareProvider>
                  <App />
                </CompareProvider>
              </WishProvider>
            </MantineProvider>
          </StyledEngineProvider>
        </CartProvider>
      </CountProvider>
    </BrowserRouter>
  );
} else {
  console.error("Root element not found.");
}
