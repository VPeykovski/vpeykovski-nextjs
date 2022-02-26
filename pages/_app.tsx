import { appWithTranslation } from "next-i18next";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "../common/theme";
import "./style.css";

const MyApp = ({ Component, pageProps }) => (
  <ThemeProvider theme={theme}>
    <Component {...pageProps} />{" "}
  </ThemeProvider>
);

export default appWithTranslation(MyApp);
