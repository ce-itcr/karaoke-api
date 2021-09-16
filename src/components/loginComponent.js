let adminClient = require('@keycloak/keycloak-admin-client').default;
let Issuer = require('openid-client').Issuer;

let settings = {
    auth:'true',
    username: 'agus',
    password: 'agus',
    grantType: 'password', 
    clientId: 'karaokeclient'
  };

login = async function (req, res) {

  
  const kcAdminClient = new adminClient({baseUrl:'http://localhost:8180/auth', realmName:'karaoke'}); 
  const credentials = JSON.parse(req.params.credentials);

  await kcAdminClient.auth(settings);

  const keycloakIssuer = await Issuer.discover(
    'http://localhost:8180/auth/realms/karaoke',
  );

  const client = new keycloakIssuer.Client({
    client_id: 'karaokeclient',
    token_endpoint_auth_method: 'none',
  });
  
  
  try {
    let tokenSet = await client.grant({
      grant_type: 'password',
      username: credentials.username,
      password: credentials.password,
    });
    const users = await kcAdminClient.users.findOne({username:credentials.username});

    const object = {username:users[0].username, email:users[0].email, firstName:users[0].firstName, lastName:users[0].lastName, membership:users[0].attributes.membership[0]}
    res.status(200).send(object);

  } catch (error) {
    res.status(400).send(false);
  }
      
};

module.exports = {login};