import { UserManager } from "oidc-client";

import OidcSettings from "./oidcsettings";

const userManager = new UserManager(OidcSettings);

console.log("User logged ikkn", /id_token/.test(window.location.hash));
if (/id_token/.test(window.location.hash)) {
  console.log("in");
  userManager.signinRedirectCallback().then(function(user) {
    localStorage.setItem("pe.signin", true);
    if (user) {
      console.log("User logged in", user.profile.nickname);
    } else {
      console.log("User not logged in");
    }
  });
} else {
  userManager.getUser().then(function(user) {
    userManager.signinSilent();
    if (user) {
      console.log("User logged ins", user.profile);
    } else {
      console.log("User not logged ins");
    }
  });
}

export default userManager;
