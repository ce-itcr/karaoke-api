let adminClient = require('@keycloak/keycloak-admin-client').default;
let Issuer = require('openid-client');
var issuer = Issuer.Issuer;

let settings = {
    auth:'true',
    username: 'jonitho99',
    password: 'admin',
    grantType: 'password', 
    clientId: 'KaraokeAdminClient'
  };

const kcAdminClient = new adminClient({baseUrl:'http://localhost:8180/auth', realmName:'KaraokeAuth'}); 

kcAdminClient.auth(settings);

const keycloakIssuer = issuer.discover(
  'http://localhost:8180/auth/realms/KaraokeAuth',
);

const client = new keycloakIssuer.Client({
  client_id: 'KaraokeAdminClient', // Same as `clientId` passed to client.auth()
  token_endpoint_auth_method: 'none', // to send only client_id in the header
});

// Use the grant type 'password'
let tokenSet = client.grant({
  grant_type: 'password',
  username: 'jonitho99',
  password: 'admin',
});

// Periodically using refresh_token grant flow to get new access token here
setInterval(async () => {
  const refreshToken = tokenSet.refresh_token;
  tokenSet = await client.refresh(refreshToken);
  kcAdminClient.setAccessToken(tokenSet.access_token);
}, 58 * 1000);


const users = kcAdminClient.users.find();

console.log(users);