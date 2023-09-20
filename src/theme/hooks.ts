import { useMediaQuery, createTheme } from "@mui/material";
import { Mode } from "@src/app/constants";
import { useState, useMemo } from "react";

export function useTheme() {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const [mode, setMode] = useState<Mode>(
    prefersDarkMode ? Mode.Dark : Mode.Light
  );
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) =>
          prevMode === Mode.Light ? Mode.Dark : Mode.Light
        );
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

  return {
    theme,
    colorMode
  }
}
