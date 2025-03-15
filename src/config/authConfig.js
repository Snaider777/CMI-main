import { PublicClientApplication } from "@azure/msal-browser";

const msalConfig = {
  auth: {
    clientId: import.meta.env.VITE_AZURE_CLIENT_ID, 
    authority: "https://login.microsoftonline.com/common",
    redirectUri: import.meta.env.VITE_AZURE_REDIRECT_URI,
  },
};

export const msalInstance = new PublicClientApplication(msalConfig);