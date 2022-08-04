import { NextPage } from "next";

import { useTheme } from "@/containers/Providers/ThemeProvider";

const HomePage: NextPage = () => {
  const { handleToggleTheme, theme } = useTheme();
  return (
    <div className="text-blue-500 dark:text-red-500">
      hello world
      <button onClick={handleToggleTheme}>current theme: {theme}</button>
    </div>
  );
};

export default HomePage;
