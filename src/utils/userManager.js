import { UserManager } from "oidc-client";
import OidcSettings from "./oidcsettings";

const userManager =
  typeof window === `undefined` ? null : new UserManager(OidcSettings);
export default userManager;
