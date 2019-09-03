/* eslint-disable-next-line no-console */
import { UserManager } from "oidc-client";

import OidcSettings from "./oidcsettings";

const userManager = new UserManager(OidcSettings);

export default userManager;
