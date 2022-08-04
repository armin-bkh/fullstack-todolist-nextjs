import { useTheme } from "@/containers/Providers/ThemeProvider";
import { NextPage } from "next";

const Home: NextPage = () => {
  const { handleToggleTheme, theme } = useTheme();
  return (
    <div className="text-blue-500 dark:text-red-500">
      hello world
      <button onClick={handleToggleTheme}>current theme: {theme}</button>
    </div>
  );
};

export default Home;
