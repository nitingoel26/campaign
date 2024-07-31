import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { PublicClientApplication } from "@azure/msal-browser";
import { MsalProvider } from "@azure/msal-react";
import { MSAL_CONFIG } from "./configs/msal.config.ts";

const msalInstance = new PublicClientApplication(MSAL_CONFIG);
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MsalProvider instance={msalInstance}>
      <App />
    </MsalProvider>
  </React.StrictMode>
);
