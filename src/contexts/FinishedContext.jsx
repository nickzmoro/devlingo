import React, { createContext, useContext, useState, useEffect } from "react";

const FinishedContext = createContext();

export const useFinished = () => useContext(FinishedContext);

const defaultStatus = {
  react: false,
  javascript: false,
  typescript: false,
};

export const FinishedProvider = ({ children }) => {
  const [finishedStatus, setFinishedStatus] = useState(() => {
    const stored = localStorage.getItem("finishedStatus");
    return stored ? JSON.parse(stored) : defaultStatus;
  });

  useEffect(() => {
    localStorage.setItem("finishedStatus", JSON.stringify(finishedStatus));
  }, [finishedStatus]);

  const setLanguageFinished = (language) => {
    setFinishedStatus((prev) => ({
      ...prev,
      [language]: true,
    }));
  };

  return (
    <FinishedContext.Provider value={{ finishedStatus, setLanguageFinished }}>
      {children}
    </FinishedContext.Provider>
  );
};
