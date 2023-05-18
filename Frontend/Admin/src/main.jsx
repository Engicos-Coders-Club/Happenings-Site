import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store/store";
import { BrowserRouter } from "react-router-dom";
import { Provider as AlertProvider, positions, transitions } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./utils/theme";
import MenuProvider from "react-flexible-sliding-menu";
import Sidebar from "./components/Navigation/Sidebar";

const options = {
  position: positions.BOTTOM_CENTER,
  timeout: 4000,
  transition: transitions.SCALE,
};

ReactDOM.createRoot(document.getElementById("root")).render(
  //<React.StrictMode>
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <AlertProvider template={AlertTemplate} {...options}>
        <BrowserRouter>
          <MenuProvider MenuComponent={Sidebar} width="280px">
            <App />
          </MenuProvider>
        </BrowserRouter>
      </AlertProvider>
    </ThemeProvider>
  </Provider>
  //</React.StrictMode>,
);
