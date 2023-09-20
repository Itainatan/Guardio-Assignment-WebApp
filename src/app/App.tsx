import { SerializedStyles } from "@emotion/react";
import Toast from "@src/common-components/Toast";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import * as styles from "./styles";
import Home from "@src/app/Home";
import { ColorModeContext } from "@src/theme";
import { Box, } from "@mui/material";
import { useTheme } from "@src/theme/hooks";

function App() {
  const { theme, colorMode } = useTheme();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <Box css={styles.container(theme)}>
          <Toast />
          <Home />
        </Box>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

declare module "react" {
  interface HTMLAttributes<T> {
    css?: SerializedStyles | any[];
  }
}

export default App;
