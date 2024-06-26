// eslint-disable-next-line import/no-extraneous-dependencies
import nodemailer from 'nodemailer';

// Function mailer using datas
async function mailer(datas) {
  try {
    // intializing a nodeMailer Transporter
    const transporter = nodemailer.createTransport({
      // intitialization of host, user and password of the "do not reply mail" (GLOBALCONTACTMAIL)
      host: process.env.MAILER_GLOBALHOST,
      port: process.env.MAILER_PORT,
      secure: true,
      auth: {
        user: process.env.MAILER_GLOBALCONTACTMAIL,
        pass: process.env.MAILER_GLOBALPASS,
      },
    });
    const datasToSend = datas;
    datasToSend.html = 'Vous avez recu un message de ';
    datasToSend.to = process.env.MAILER_CONTACTMAIL;
    // if no error adding user email and the message description to datasToSend
    if (datas.type !== 'error') {
      datasToSend.html += `${datas.from}\n
      de l'entreprise: ${datas.company}\n
      ${datas.message}`;
    }
    // calling nodeMailer sendMail() method with datas
    const emailSend = await transporter.sendMail(datasToSend);
    // explain of !! : conversion to boolean (if email is sent return true)
    return !!emailSend;
  } catch (err) {
    return false;
  }
}
export default mailer;
