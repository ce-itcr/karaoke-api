let adminClient = require('@keycloak/keycloak-admin-client').default;
let Issuer = require('openid-client').Issuer;

let settings = {
    auth:'true',
    username: 'prueba',
    password: 'prueba',
    grantType: 'password', 
    clientId: 'Karaoke'
  };

login = async function () {

const kcAdminClient = new adminClient({baseUrl:'http://localhost:8080/auth', realmName:'KaraokeAuth'}); 

await kcAdminClient.auth(settings);

const keycloakIssuer = await Issuer.discover(
  'http://localhost:8080/auth/realms/KaraokeAuth',
);

const client = new keycloakIssuer.Client({
  client_id: 'Karaoke',
  token_endpoint_auth_method: 'none',
});

let tokenSet = await client.grant({
  grant_type: 'password',
  username: 'prueba',
  password: 'prueba',
});

setInterval(async () => {
  const refreshToken = tokenSet.refresh_token;
  tokenSet = await client.refresh(refreshToken);
  kcAdminClient.setAccessToken(tokenSet.access_token);
}, 58 * 1000);


const users = await kcAdminClient.users.find();

console.log(users);
};

module.exports = {login};