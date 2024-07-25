import { PublicClientApplication } from "@azure/msal-browser";
import { LOGIN_REQUEST } from "../configs/msal.config";
export const handleSignIn = async (instance: PublicClientApplication) => {
  try {
    const loginResponse = await instance.loginPopup(LOGIN_REQUEST);
    console.log("Login Response:", loginResponse);
    if (loginResponse.account) {
    }
  } catch (error) {
    console.error("Login failed:", error);
  }
};

export const handleSignOut = async (instance: PublicClientApplication) => {
  try {
    await instance.logoutPopup();
    console.log("Logout successful");
  } catch (error) {
    console.error("Logout failed:", error);
    throw error;
  }
};
