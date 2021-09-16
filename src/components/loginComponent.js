let adminClient = require('@keycloak/keycloak-admin-client').default;
let Issuer = require('openid-client').Issuer;

let settings = {
    auth:'true',
    username: 'agus',
    password: 'agus',
    grantType: 'password', 
    clientId: 'karaokeclient'
  };

login = async function () {

const kcAdminClient = new adminClient({baseUrl:'http://localhost:8180/auth', realmName:'karaoke'}); 

await kcAdminClient.auth(settings);

const keycloakIssuer = await Issuer.discover(
  'http://localhost:8180/auth/realms/karaoke',
);

const client = new keycloakIssuer.Client({
  client_id: 'karaokeclient',
  token_endpoint_auth_method: 'none',
});

let tokenSet = await client.grant({
  grant_type: 'password',
  username: 'agus',
  password: 'agus',
});

setInterval(async () => {
    const refreshToken = tokenSet.refresh_token;
    tokenSet = await client.refresh(refreshToken);
    kcAdminClient.setAccessToken(tokenSet.access_token);
    }, 58 * 1000);

    
    const users = await kcAdminClient.users.find();

    console.log(users[0]);
};

module.exports = {login};