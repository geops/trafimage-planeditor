const Oidcsettings = {
  authority: "https://sso.geops.io/openid",
  client_id: "023137",
  redirect_uri: "http://localhost:8000/",
  post_logout_redirect_uri: "http://localhost:8000/",
  response_type: "id_token token",
  scope: "openid profile email roles",

  filterProtocolClaims: true,
  loadUserInfo: true
};

export default Oidcsettings;
