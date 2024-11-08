import React from "react";
import useLocalStorage from "./useLocalStorage";
import "./theme.css";

const LightDark = (props) => {
  const [theme, setTheme] = useLocalStorage("theme", "dark");

  function handleToggleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }
  return (
    <div className="py-10 cont duration-300 h-screen" data-theme={theme}>
      <h1 className="text-center text-4xl">Hey World! </h1>
      <div className="my-6 flex justify-center">
        <button onClick={handleToggleTheme} className=" p-2 rounded-lg m-auto">
          Change Theme
        </button>
      </div>
    </div>
  );
};

export default LightDark;
