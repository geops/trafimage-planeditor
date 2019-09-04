import userManager from "../utils/userManager";

const onSuccess = user => {
  const params = (user && user.state && user.state.urlParams) || "";
  const pathName = (user && user.state && user.state.urlPathname) || "/";
  if (window) window.location.href = `${pathName}${params}`;
};

const onError = error => {
  console.error("Signin redirect:", error);
  if (window) window.location.href = "/";
};

const Signin = ({ pageContext: { locale } }) => {
  if (!userManager) {
    return null;
  }
  userManager
    .signinRedirectCallback()
    .then(user => {
      onSuccess(user);
    })
    .catch(error => {
      onError(error);
    });
  return "Redirecting ...";
};

export default Signin;
