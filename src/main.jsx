import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./styles/globalStyles.css";
import { CrystalProvider } from "./contexts/CrystalContext";
import { FinishedProvider } from "./contexts/FinishedContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <FinishedProvider>
      <CrystalProvider>
        <App />
      </CrystalProvider>
    </FinishedProvider>
  </StrictMode>
);
