import userManager from "../utils/userManager";

const onSuccess = () => {
  const params = (user && user.state && user.state.urlParams) || "";
  const pathName = (user && user.state && user.state.urlPathname) || "/";
  if (window) window.location.href = `${pathName}${params}`;
};

const onError = error => {
  console.error("Signout redirect:", error);
  if (window) window.location.href = "/";
};

const Signout = ({ pageContext: { locale } }) => {
  if (!userManager) {
    return null;
  }
  userManager
    .signoutRedirectCallback()
    .then(() => {
      onSuccess();
    })
    .catch(error => {
      onError(error);
    });
  return null;
};

export default Signout;
