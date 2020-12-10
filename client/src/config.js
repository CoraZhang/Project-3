/* eslint-disable import/no-anonymous-default-export */
require('dotenv').config()

export default {
  oidc: {
    clientId: process.env.Client_Id || '0oa1d3kgklSfhS18Z5d6',
    issuer: process.env.Issuer || 'https://dev-7705867.okta.com/oauth2/default',
    redirectUri: 'http://localhost:8080/login/callback',  //'https://sleepy-retreat-90049.herokuapp.com/login/callback',
    scopes: ['openid', 'profile', 'email'],
    pkce: true,
    disableHttpsCheck: true,
  },
  resourceServer: {
    messagesUrl:  'http://localhost:8080/api/messages', //'https://sleepy-retreat-90049.herokuapp.com/api/messages',
  },
};
