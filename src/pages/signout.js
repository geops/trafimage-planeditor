import userManager from "../utils/userManager";

const onSuccess = user => {
  const params = (user && user.state && user.state.urlParams) || "";
  const pathName = (user && user.state && user.state.urlPathname) || "/";
  if (window) window.location.href = `${pathName}${params}`;
};

const onError = error => {
  console.error("Signout redirect:", error);
  if (window) window.location.href = "/";
};

if (
  userManager &&
  typeof window !== `undefined` &&
  /signout/.test(window.location.pathname)
) {
  userManager
    .signoutRedirectCallback()
    .then(() => {
      onSuccess();
    })
    .catch(error => {
      onError(error);
    });
}

const Signout = ({ pageContext: { locale } }) => {
  return null;
};

export default Signout;
