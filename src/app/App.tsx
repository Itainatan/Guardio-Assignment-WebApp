import { SerializedStyles } from "@emotion/react";
import Toast from "@src/common-components/Toast";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import * as styles from "./styles";
import Home from "@src/app/Home";
import { useMemo, useState } from "react";
import { ColorModeContext } from "@src/theme";
import { useMediaQuery } from "@mui/material";
import { Mode } from "./constants";

function App() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const [mode, setMode] = useState<Mode>(prefersDarkMode ? Mode.Dark : Mode.Light);
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode ===  Mode.Light ?  Mode.Dark :  Mode.Light));
      },
    }),
    []
  );

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <div css={styles.container}>
          <Toast />
          <Home />
        </div>
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
