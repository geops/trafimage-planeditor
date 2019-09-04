import userManager from "../utils/userManager";

const Silent = ({ pageContext: { locale } }) => {
  if (!userManager) {
    return null;
  }
  userManager.signinSilentCallback();
  return null;
};

export default Silent;
