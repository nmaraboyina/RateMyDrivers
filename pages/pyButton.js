import React, { useState } from "react";

const Button = () => {
  const [isPressed, setIsPressed] = useState(false);

  const handleClick = async () => {
    setIsPressed(true);

    try {
      const response = await fetch("/api/runPython", {
        method: "POST", // You can use GET or POST depending on your API route
      });

      if (response.status === 200) {
        console.log("Python script executed successfully");
      } else {
        console.error("Error executing Python script");
      }
    } catch (error) {
      console.error("Error:", error);
    }

    setIsPressed(false);
  };

  return (
    <button
    className="text-white text-2xl bg-red-900 hover:bg-white hover:text-red-900 py-2 px-4 rounded transition duration-300 ease-in-out font-heading font-bold  mx-5  drop-shadow-xl z-40"
      onClick={handleClick}
      disabled={isPressed}
    >
      DRIVER SIGN IN
    </button>
  );
};

export default Button;
