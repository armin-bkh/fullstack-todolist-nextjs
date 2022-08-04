import React from "react";

import { useTheme } from "@/containers/Providers/ThemeProvider";

function ChangeTheme() {
  const { handleToggleTheme, theme } = useTheme();

  return <button onClick={handleToggleTheme}>curr theme: {theme}</button>;
}

export default ChangeTheme;
