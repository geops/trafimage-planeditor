/* eslint-disable-next-line no-console */
import { UserManager } from "oidc-client";

import OidcSettings from "./oidcsettings";

const userManager = new UserManager(OidcSettings);

const onSuccess = user => {
  const params = (user && user.state && user.state.urlParams) || "";
  const pathName = (user && user.state && user.state.urlPathname) || "/";
  window.location.href = `${pathName}${params}`;
};

const onError = error => {
  console.error(error);
  window.location.href = "/";
};

console.log("User logged ikkn", /id_token/.test(window.location.hash));
if (/id_token/.test(window.location.hash)) {
  console.log("in");
  userManager.signinRedirectCallback().then(user => {
    onSuccess(user);
  });
} else {
  // userManager.getUser().then(function(user) {
  //   userManager.signinSilent();
  //   if (user) {
  //     localStorage.setItem("signinSilent userNickname", user.profile.nickname);
  //     console.log("signinSilent User logged ins", user.profile);
  //   } else {
  //     console.log("signinSilent User not logged ins");
  //   }
  // });
}

// if (!/id_token/.test(window.location.hash)) {
//   console.log("in");
//   userManager.signoutPopupCallback().then(user => {
//     onSuccess(user);
//   }).catch(error => {
//     onError(error)
//   });
// }
export { onSuccess, onError };

export default userManager;
