import React, { createContext, useContext, useState, useEffect } from "react";

const CrystalContext = createContext();

export const useCrystal = () => useContext(CrystalContext);

export const CrystalProvider = ({ children }) => {
  const [amountCristal, setAmountCristal] = useState(() => {
    const stored = localStorage.getItem("amountCristal");
    return stored ? Number(stored) : 0;
  });

  useEffect(() => {
    localStorage.setItem("amountCristal", amountCristal);
  }, [amountCristal]);

  return (
    <CrystalContext.Provider value={{ amountCristal, setAmountCristal }}>
      {children}
    </CrystalContext.Provider>
  );
};
