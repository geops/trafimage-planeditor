const getUrl = path => {
  if (typeof window === `undefined`) {
    return path;
  }
  return `${window.location.protocol}//${window.location.hostname}${
    window.location.port ? `:${window.location.port}` : ""
  }${path}`;
};

const Oidcsettings = {
  authority: "https://sso.geops.io/openid",
  client_id: "023137",
  redirect_uri: getUrl("/signin"),
  post_logout_redirect_uri: getUrl("/signout"),
  silent_redirect_uri: getUrl("/silent"),
  response_type: "id_token token",
  scope: "openid profile email roles",
  filterProtocolClaims: true,
  automaticSilentRenew: false,
  loadUserInfo: true
};

export default Oidcsettings;
