import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./styles/globalStyles.css";
import { CrystalProvider } from "./contexts/CrystalContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CrystalProvider>
      <App />
    </CrystalProvider>
  </StrictMode>
);
