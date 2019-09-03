const Oidcsettings = {
  authority: "https://sso.geops.io/openid",
  client_id: "023137",
  redirect_uri: "http://fake.geops.io:8000/",
  post_logout_redirect_uri: "http://fake.geops.io:8000/",
  silent_redirect_uri: "http://fake.geops.io:8000/",
  response_type: "id_token token",
  scope: "openid profile email roles",
  filterProtocolClaims: true,
  automaticSilentRenew: false,
  loadUserInfo: true
};

export default Oidcsettings;
