import {
  PUBLIC_CLIENT_APPLICATION,
  LOGIN_REQUEST,
  TOKEN_REQUEST,
} from "./msal.config";

export const handleSignIn = async () => {
  const loginResponse = await PUBLIC_CLIENT_APPLICATION.loginPopup(
    LOGIN_REQUEST
  );
  if (loginResponse.account) {
    PUBLIC_CLIENT_APPLICATION.setActiveAccount(loginResponse.account);
  }
  const tokenResponse = await PUBLIC_CLIENT_APPLICATION.acquireTokenSilent(
    TOKEN_REQUEST
  );
  //setToken(tokenResponse.accessToken);
};

export const handleSignOut = async () => {
  PUBLIC_CLIENT_APPLICATION.logout();
  //   if (!interactionInProgress) {
  //     setInteractionInProgress(true);
  //     PUBLIC_CLIENT_APPLICATION.logout();
  //     setToken(null);
  //     setInteractionInProgress(false);
  //   }
};

export const handleRefreshToken = async () => {
  const tokenResponse = await PUBLIC_CLIENT_APPLICATION.acquireTokenSilent(
    TOKEN_REQUEST
  );
  //setToken(tokenResponse.accessToken);
};
