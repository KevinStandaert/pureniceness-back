import { google } from 'googleapis';
import { OAuth2Client } from 'google-auth-library';

const oAuth2Client = new OAuth2Client({
  clientId: process.env.DRIVE_ID_CLIENT,
  clientSecret: process.env.DRIVE_SECRET_CLIENT,
  redirectUri: 'https://developers.google.com/oauthplayground',
});

oAuth2Client.setCredentials({ refresh_token: process.env.REFRESH_TOKEN });
const drive = google.drive({ version: 'v3', auth: oAuth2Client });

export default drive;
