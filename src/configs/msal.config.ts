const MSAL_CONFIG = {
  auth: {
    clientId: "YOUR_CLIENT_ID",
    authority: "https://login.microsoftonline.com/common",
    //redirectUri: "http://localhost:3000",
  },
  cache: {
    cacheLocation: "localStorage",
    storeAuthStateInCookie: false,
  },
};

const LOGIN_REQUEST = {
  scopes: ["openid", "offline_access"],
};

const TOKEN_REQUEST = {
  scopes: ["User.ReadWrite.All"],
};

export { MSAL_CONFIG, LOGIN_REQUEST, TOKEN_REQUEST };
